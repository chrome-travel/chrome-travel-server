const { UserDestination } = require('./../models')
const CustomError = require('./../helpers/customError')

function authorization(req, res, next) {
    let id = req.params.id
    UserDestination.findByPk(id)
        .then(result => {
            if (!result) {
                throw new CustomError(400, "No Id Found!")
            } else {
                if (req.decoded.id === result.dataValues.UserId) {
                    next()
                } else {
                    throw new CustomError(401, "You are not authorized!")
                }
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authorization