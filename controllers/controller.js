const { User } = require('./../models');
const CustomError = require('./../helpers/customError');
const { comparePass } = require('./../helpers/bcrypt');
const { generateToken } = require('./../helpers/jwt');
const axios = require('axios');

class Controller{
    static login(req,res,next){
        const { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        }) 
            .then(result => {
                if (!result) {
                    const error = new CustomError(404,"Email/Password wrong")
                    throw(error)
                } else {
                    const authenticate = comparePass(password, result.dataValues.password)
                    console.log(password)
                    console.log(result.dataValues.password)
                    console.log(authenticate)
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
                        console.log(token)
                        res.status(200).json({ token })
                    } else {
                        const error = new CustomError(400,"Email/Password wrong")
                        throw(error)
                    }
                }
            })
            .catch(err => {
                // console.log(err)
                res.status(500).json(err)
            });
    }

    static testTripAdvisor (req, res, next) {
        // axios({
        //     method: 'GET',
        //     url: 'https://tripadvisor1.p.rapidapi.com/locations/search',
        //     headers: {
        //         "content-type":"application/octet-stream",
        //         "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
        //         "x-rapidapi-key":"4a003621a5msh52f32a49632069bp1c8464jsn6d981b16e394"
        //     },
        //     params:{
        //         "query":"bali"
        //     }
        // })
        //     .then(result => {
        //         res.status(200).json(result);
        //     })
        //     .catch(err => {
        //         res.status(500).json(err);
        //     });

        axios({
            "method":"GET",
            "url":"https://tripadvisor1.p.rapidapi.com/locations/search",
            "headers":{
            // "content-type":"application/octet-stream",
            "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key":"4a003621a5msh52f32a49632069bp1c8464jsn6d981b16e394"
            },"params":{
            // "location_id":"1",
            // "limit":"30",
            // "sort":"relevance",
            // "offset":"0",
            // "lang":"en_US",
            // "currency":"USD",
            // "units":"km",
            "query":"pattaya"
            }
            })
            .then((response)=>{
              res.status(200).json(response.data)
            })
            .catch((error)=>{
              console.log(error.toJSON())
            })
    }
}

module.exports = Controller