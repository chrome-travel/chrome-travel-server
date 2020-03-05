const router = require('express').Router()
const userDestinationRoute = require('../routes/userDestinationRoute');

router.use('/wishlist', userDestinationRoute);

const routerController = require('./user')

router.use('/users', routerController)

module.exports = router;