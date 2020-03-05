const { UserDestination } = require('./../models')
const CustomError = require('./../helpers/customError')

function authorization(req, res, next) {
    let id = req.params.id
    console.log()
    console.log(id)
    console.log()
    UserDestination.findByPk(id)
        .then(result => {
            console.log(result)
            if (!result) {
                const error = new CustomError(400, "No Id Found!")
                throw(error)
            } else {
                if (req.decoded.id === result.dataValues.UserId) {
                    next()
                } else {
                    const error = new CustomError(401, "You are not authorized!")
                    throw(error)
                }
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authorization