const router = require('express').Router()
const destinationRouter = require('./destination');
const errorHandler = require('../middlewares/errorHandler');

router.use("/destinations", destinationRouter)

const routerController = require('./user')

router.use('/users', routerController)
router.use(errorHandler)

module.exports = router;