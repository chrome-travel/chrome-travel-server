const router = require('express').Router()
const destinationRouter = require('./destination');

router.use("/destinations", destinationRouter)

module.exports = router;