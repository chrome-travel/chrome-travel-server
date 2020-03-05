const router = require('express').Router();
const WishlistController = require('../controllers/wishlistController');
const authentication = require('../middlewares/authentication');

router.use(authentication);
router.get('/', WishlistController.getAll);
router.get('/:id', WishlistController.getById);
router.post('/', WishlistController.create);
router.put('/:id', WishlistController.update);
router.delete('/:id', WishlistController.delete);

module.exports = router;