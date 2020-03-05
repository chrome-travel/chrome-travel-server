const { User } = require('./../models')

class ControllerUser{

    static getUsers(req,res,next) {
        User.findAll()
            .then(users => {
                console.log(users)
                res.status(200).json(users)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }

    static createUser(req,res,next) {
        const { name, email, password, phone_number, gender, is_active, role} = req.body
        console.log(gender)
        console.log(typeof gender)
        User.create({
            name,
            email,
            password,
            phone_number,
            gender,
            is_active,
            role
        })
            .then(user => {
                console.log(user)
                res.status(201).json(user)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }

    static updateUser(req,res,next) {
        let id = req.params.id
        const { name, email, password, phone_number, gender, is_active, role} = req.body
        User.update({
            name,
            email,
            password,
            phone_number,
            gender,
            is_active,
            role
        },{
            where: {
                id
            },
            returning: true
        })
            .then(updated => {
                const user = updated[1]
                res.status(200).json(user)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }

    static deleteUser(req,res,next) {
        let id = req.params.id
        let user
        User.findByPk(id)
            .then(result => {
                if (!result) {
                    throw({name: "Not Found", errors: {message: "UserNotFound"}})
                } else {
                    user = result
                    return User.destroy({
                        where: {
                            id
                        }
                    })
                }
            })
            .then(result => {
                res.status(200).json(user)
            })
            .catch(err => {
                res.status(500).json(err)
            })
        
    }
    
}

module.exports = ControllerUser