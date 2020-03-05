const router = require('express').Router()
const userDestinationRoute = require('../routes/userDestinationRoute');

router.use('/wishlist', userDestinationRoute);

module.exports = router;