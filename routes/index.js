const router = require('express').Router()
const destinationRouter = require('./destination');
<<<<<<< HEAD
const Controller = require('./../controllers/controller')

router.use("/destinations", destinationRouter)

const routerController = require('./user')

router.use('/users', routerController)
router.post('/login', Controller.login)
=======
const wishlistRoute = require('./wishlist');
const UserRouter = require('./user')
const errorHandler = require('../middlewares/errorHandler');

router.use("/destinations", destinationRouter)
router.use('/users', UserRouter)
router.use('/wishlist', wishlistRoute);
router.use(errorHandler)
>>>>>>> 3a12fe4868013a33e13ee56de85566d4e2dd37e7

module.exports = router;