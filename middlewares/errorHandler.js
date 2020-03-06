const CustomError = require('../helpers/customError');

const errorHandler = (err, req, res, next) => {
    if (err.name == "SequelizeValidationError") {
        let error = err.errors.map(el => el.message);
        res.status(400).json(error[0]);
    } else if (err.name == "JsonWebTokenError") {
        res.status(401).json("Please login first!");
    } else {
        res.status(err.status || 500).json(err.message || "Internal Server Error");
    }
}

module.exports = errorHandler;
