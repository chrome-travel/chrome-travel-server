const router = require('express').Router()
const destinationRouter = require('./destination');
const Controller = require('./../controllers/controller')
const wishlistRoute = require('./wishlist');
const UserRouter = require('./user')
const errorHandler = require('../middlewares/errorHandler');

router.post('/login', Controller.login)
router.use("/destinations", destinationRouter)
router.use('/users', UserRouter)
router.use('/wishlist', wishlistRoute);

router.get('/tripadvisor', Controller.testTripAdvisor);

router.use(errorHandler)

module.exports = router;