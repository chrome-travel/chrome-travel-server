const router = require('express').Router()

const routerController = require('./user')

router.use('/users', routerController)

module.exports = router;