const { User } = require('./../models');
const CustomError = require('./../helpers/customError');
const { comparePass } = require('./../helpers/bcrypt');
const { generateToken } = require('./../helpers/jwt');
const {OAuth2Client} = require('google-auth-library');
const axios = require('axios');

const invalid = "Email/Password wrong";

class Controller {
    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(result => {
                if (!result) {
                    throw new CustomError(400, invalid)
                } else {
                    const authenticate = comparePass(password, result.dataValues.password)
                    if (authenticate) {
                        const payload = {
                            id: result.dataValues.id,
                            name: result.dataValues.name,
                            email: result.dataValues.email,
                            phone_number: result.dataValues.phone_number,
                            gender: result.dataValues.gender
                        }
                        const token = generateToken(payload)
                        req.headers.token = token
                        res.status(200).json({ token })
                    } else {
                        throw new CustomError(400, invalid)
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static loginGoogle(req, res, next) {
        const idToken = req.headers.id_token
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        let data
        client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID
        })
            .then(ticket => {
                const payload = ticket.getPayload()
                const email = payload.email
                data = payload
                return User.findAll({
                    where: {
                        email
                    }
                })
            })
            .then(result => {
                if (result.length === 0) {
                    return User.create({
                        name: data.name,
                        email: data.email,
                        password: `${data.email}+g`,
                        gender: true
                    })
                } else {
                    return result[0]
                }
            })
            .then(result => {
                const newPayload = {
                    id: result.id,
                    name: result.name,
                    email: result.email,
                    phone_number: result.phone_number,
                    gender: result.gender
                }
                const token = generateToken(newPayload)
                req.headers.token = token
                res.status(201).json({ token })
            })
            .catch(err => {
                next(err)
            })
    }

    static getTop5Hotel (req, res, next) {
        let query = req.body.query;

        axios({
            "method":"GET",
            "url":"https://tripadvisor1.p.rapidapi.com/locations/search",
            "headers":{
                "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key":"4a003621a5msh52f32a49632069bp1c8464jsn6d981b16e394"
            },
            "params":{
                query
            }
        })
            .then(response => {
                let locId = response.data.data[0].result_object.location_id;
                return axios({
                    "method":"GET",
                    "url":"https://tripadvisor1.p.rapidapi.com/hotels/list",
                    "headers":{
                        "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
                        "x-rapidapi-key":"4a003621a5msh52f32a49632069bp1c8464jsn6d981b16e394"
                    },
                    "params":{
                        "limit":"5",
                        "order":"asc",
                        "sort":"recommended",
                        "location_id":locId,
                    }
                })
            })
            .then((response)=>{
                // console.log(response);
                let result = response.data.data.map(el => el = el.name)
                res.status(200).json({hotels: result})
            })
            .catch(err => {
                next(err);
                console.log(error);
            });
    }
}

module.exports = Controller