const router = require('express').Router()
const destinationRouter = require('./destination');
const userDestinationRoute = require('../routes/userDestinationRoute');
const UserRouter = require('./user')

router.use("/destinations", destinationRouter)
router.use('/users', UserRouter)
router.use('/wishlist', userDestinationRoute);

module.exports = router;