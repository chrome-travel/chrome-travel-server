const router = require('express').Router();
const UserDestinationController = require('../controllers/userDestinationController');

router.get('/', UserDestinationController.getAll);
router.get('/:id', UserDestinationController.getById);
router.post('/', UserDestinationController.create);
router.put('/:id', UserDestinationController.update);
router.delete('/:id', UserDestinationController.delete);

module.exports = router;