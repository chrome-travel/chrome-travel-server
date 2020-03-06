const { Destination } = require('../models');
const CustomError = require('../helpers/customError');
const notFound = "Destination not found!";
const zomato = require('../helpers/zomato');
const tripAdvisor = require('../helpers/tripAdvisor');
const youtube = require('../helpers/youtube');

class Controller {
    static findAll(req, res, next) {
        Destination.findAll()
            .then((result) => {
                res.status(200).json(result);
            }).catch((err) => {
                next(err);
            });
    }

    static findOne(req, res, next) {
        const id = req.params.id;
        let destination;
        let restaurants;
        let hotels;
        Destination.findByPk(id)
            .then((result) => {
                if (result) {
                    destination = result;
                    return zomato(result.city)
                } else {
                    throw new CustomError(400, notFound)
                }
            })
            .then((result) => {
                restaurants = result.data.restaurants.map(el => {
                    return {
                        name: el.restaurant.name,
                        rating: el.restaurant.user_rating.aggregate_rating
                    }
                })
                return tripAdvisor(destination.city)
            })
            .then(result => {
                hotels = result.data.data.map(el => el = el.name)
                return youtube(destination.name)
            })
            .then((response) => {
                let youtubeVideos = response.data.items.map(el => el = el.id)
                let final = {
                    data: destination,
                    zomato: restaurants,
                    hotels,
                    youtube: youtubeVideos
                }
                res.status(200).json(final);
            })
            .catch((err) => {
                next(err);
            });
    }

    static update(req, res, next) {
        const id = req.params.id;
        const data = {
            name: req.body.name,
            city: req.body.city,
            country: req.body.country
        };

        Destination.update(data, {
            where: {
                id: id
            },
            returning: true
        })
            .then((result) => {
                if (result[0]) {
                    res.status(200).json(result[1][0]);
                } else {
                    throw new CustomError(400, notFound);
                }
            }).catch((err) => {
                next(err);
            });
    }

    static create(req, res, next) {
        const data = {
            name: req.body.name,
            city: req.body.city,
            country: req.body.country
        };

        Destination.create(data)
            .then((result) => {
                res.status(201).json(result);
            }).catch((err) => {
                next(err);
            });
    }

    static delete(req, res, next) {
        const id = req.params.id;
        let deleted;
        Destination.findByPk(id)
            .then((result) => {
                if (result) {
                    deleted = result;
                    return Destination.destroy({
                        where: {
                            id: id
                        }
                    })
                } else {
                    throw new CustomError(400, notFound)
                }
            })
            .then((result) => {
                res.status(200).json(result);
            }).catch((err) => {
                next(err);
            });
    }
}

module.exports = Controller;
