const { User } = require('./../models')
const CustomError = require('../helpers/customError');
const notFound = "User not found!";
class ControllerUser {

    static getUsers(req, res, next) {
        User.findAll()
            .then(users => {
                res.status(200).json(users)
            })
            .catch(err => {
                next(err)
            })
    }

    static createUser(req, res, next) {
        const { name, email, password, phone_number, gender, is_active, role } = req.body
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
                res.status(201).json(user)
            })
            .catch(err => {
                next(err)
            })
    }

    static updateUser(req, res, next) {
        let id = req.params.id
        const { name, email, password, phone_number, gender, is_active, role } = req.body
        User.update({
            name,
            email,
            password,
            phone_number,
            gender,
            is_active,
            role
        }, {
            where: {
                id
            },
            returning: true
        })
            .then(updated => {
                if (updated[0]) {
                    res.status(200).json(updated[1][0]);
                } else {
                    throw new CustomError(400, notFound);
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteUser(req, res, next) {
        let id = req.params.id
        let user
        User.findByPk(id)
            .then(result => {
                if (result) {
                    user = result;
                    return User.destroy({
                        where: {
                            id: id
                        }
                    })
                } else {
                    throw new CustomError(400, notFound)
                }
            })
            .then(result => {
                res.status(200).json(user)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ControllerUser