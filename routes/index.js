const router = require('express').Router()
const destinationRouter = require('./destination');
const wishlistRoute = require('./wishlist');
const UserRouter = require('./user')
const errorHandler = require('../middlewares/errorHandler');

router.use("/destinations", destinationRouter)
router.use('/users', UserRouter)
router.use('/wishlist', wishlistRoute);
router.use(errorHandler)

module.exports = router;