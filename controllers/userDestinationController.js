const { UserDestination, User, Destination } = require('../models');

class UserDestinationController {
	static getAll (req, res, next) {
		let UserId = req.decode.UserId;
		let DestinationId = req.body.DestinationId;

		UserDestination.findAll({
			where: { 
				UserId,
				DestinationId
			},
			include: [UserId, DestinationId]
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
		let UserId = req.decode.UserId;

		UserDestination.findOne({
			where: { 
				UserId, 
				id
			}
		})
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}

	static create (req, res, next) {
		let UserId = req.decode.id;
		let DestinationId = req.body.DestinationId;
		let date = req.body.date;

		UserDestination.create({
			
		})
	}

	static update (req, res, next) {

	}

	static delete (req, res, next) {

	}
}

module.exports = UserDestinationController;