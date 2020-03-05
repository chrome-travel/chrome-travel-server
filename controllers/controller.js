const { User } = require('./../models')
const CustomError = require('./../helpers/customError')
const { comparePass } = require('./../helpers/bcrypt')
const { generateToken } = require('./../helpers/jwt')

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
            })
            
    }
}

module.exports = Controller