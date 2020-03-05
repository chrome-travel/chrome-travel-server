const router = require('express').Router()
const destinationRouter = require('./destination');

router.use("/destinations", destinationRouter)

const routerController = require('./user')

router.use('/users', routerController)

module.exports = router;