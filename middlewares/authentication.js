const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models/index');
const CustomError = require('./../helpers/customError');

module.exports = function (req, res, next) {
    try {
        const token = req.headers.token;

        req.decoded = verifyToken(token)

        User.findOne({
            where: {
                email: req.decoded.email
            }
        })
            .then(response => {
                if (response) {
                    next()
                }
                else {
                    throw new CustomError(401, "Authentication failed! Please check your email")
                }
            })
            .catch(err => {
                next(err)
            })
    }

    catch (err) {
        next(err)
    }
}