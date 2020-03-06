const router = require('express').Router()
const DestinationController = require('../controllers/destinationController');
const authentication = require("../middlewares/authentication");

router.use(authentication);

router.get("/", DestinationController.findAll);
router.post("/", DestinationController.create);
router.put("/:id", DestinationController.update);
router.delete("/:id", DestinationController.delete);
router.get("/:id", DestinationController.findOne);

module.exports = router;