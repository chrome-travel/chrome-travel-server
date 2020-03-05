const router = require('express').Router()
const destinationRouter = require('./destination');
const Controller = require('./../controllers/controller')
const wishlistRoute = require('./wishlist');
const UserRouter = require('./user')
const errorHandler = require('../middlewares/errorHandler');
const YoutubeController = require('../controllers/youtubeController')

router.get('/youtubeSearch', YoutubeController.search)
router.post('/login', Controller.login)
router.post('/loginGoogle', Controller.loginGoogle)
router.use("/destinations", destinationRouter)
router.use('/users', UserRouter)
router.use('/wishlist', wishlistRoute);
router.use(errorHandler)

module.exports = router;