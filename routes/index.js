const router = require('express').Router()
const userDestinationRoute = require('../routes/userDestinationRoute');
const routerController = require('./user')

router.use('/users', routerController)
router.use('/wishlist', userDestinationRoute);

module.exports = router;