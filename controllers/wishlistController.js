const { UserDestination, User, Destination } = require('../models');

class UserDestinationController {
	static getAll (req, res, next) {
		// let UserId = req.decode.UserId;
		let UserId = req.body.UserId;

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
				res.status(500).json(err);
			});
	}

	static getById (req, res, next) {
		let id = req.params.id;

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
				res.status(500).json(err);
			});
	}

	static create (req, res, next) {
		// let UserId = req.decode.id;
		let UserId = req.body.UserId;
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
				console.log(err);
				res.status(500).json(err);
			})
	}

	static update (req, res, next) {
		let id = req.params.id;
		let UserId = req.body.UserId;
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

module.exports = UserDestinationController;