const { UserDestination, User, Destination } = require('../models');

class WishlistController {
	static getAll (req, res, next) {
		let UserId = req.decoded.id;
		// console.log(req)
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
				throw new CustomError(500, err)
			});
	}

	static getById (req, res, next) {
		let id = req.params.id;
		console.log(id)
		UserDestination.findOne({
			where: { 
				id
			},
			include: [User, Destination]
		})
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				throw new CustomError(500, err)
			});
	}

	static create (req, res, next) {
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
				throw new CustomError(500, err)
			})
	}

	static update (req, res, next) {
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
				res.status(200).json(result[1]);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json(err);
			})
	}

	static delete (req, res, next) {
		let id = req.params.id;

		UserDestination.destroy({
			where: { id }
		})
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json(err);
			})
	}
}

module.exports = WishlistController;