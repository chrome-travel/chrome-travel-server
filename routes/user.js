const router = require('express').Router()
const ControllerUser = require('./../controllers/controllerUser')

router.get('/', ControllerUser.getUsers)
router.post('/', ControllerUser.createUser)
router.put('/:id', ControllerUser.updateUser)
router.delete('/:id', ControllerUser.deleteUser)

module.exports = router;