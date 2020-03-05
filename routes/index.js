const router = require('express').Router()
const destinationRouter = require('./destination');
const Controller = require('./../controllers/controller')

router.use("/destinations", destinationRouter)

const routerController = require('./user')

router.use('/users', routerController)
router.post('/login', Controller.login)

module.exports = router;