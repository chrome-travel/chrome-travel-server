const { UserDestination, User, Destination } = require('../models');
const CustomError = require('../helpers/customError');
const notFound = "Wishlist not found!";

class WishlistController {
	static getAll(req, res, next) {
		let UserId = req.decoded.id;

		UserDestination.findAll({
			where: {
				UserId
			},
			include: [User, Destination]
		})
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				next(err)
			});
	}

	static getById(req, res, next) {
		let id = req.params.id;

		UserDestination.findOne({
			where: {
				id
			},
			include: [User, Destination]
		})
			.then(result => {
				if (result) {
					res.status(200).json(result);
				} else {
					throw new CustomError(400, notFound)
				}
			})
			.catch(err => {
				next(err)
			});
	}

	static create(req, res, next) {
		let UserId = req.decoded.id;
		let DestinationId = req.body.DestinationId;
		let date = req.body.date;

		UserDestination.create({
			UserId,
			DestinationId,
			date
		})
			.then(result => {
				res.status(201).json(result);
			})
			.catch(err => {
				next(err)
			})
	}

	static update(req, res, next) {
		let id = req.params.id;
		let UserId = req.decoded.id;
		let DestinationId = req.body.DestinationId;
		let date = req.body.date;

		UserDestination.update({
			date
		}, {
			where: { id },
			returning: true,
			include: [User, Destination]
		})
			.then(result => {
				if (result[0]) {
					res.status(200).json(result[1][0]);
				} else {
					throw new CustomError(400, notFound);
				}
			})
			.catch(err => {
				next(err);
			})
	}

	static delete(req, res, next) {
		let id = req.params.id;
		let deleted;

		UserDestination.findByPk(id)
			.then((result) => {
				if (result) {
					deleted = result;
					return UserDestination.destroy({
						where: { id }
					})
				} else {
					throw new CustomError(400, notFound);
				}
			})
			.then(result => {
				res.status(200).json(deleted);
			})
			.catch(err => {
				next(err);
			})
	}
}

module.exports = WishlistController;