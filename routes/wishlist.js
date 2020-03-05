const router = require("express").Router();
const WishlistController = require("../controllers/wishlistController");
const authentication = require("../middlewares/authentication");
const authorization = require("./../middlewares/authorization")

router.use(authentication);
router.get("/", WishlistController.getAll);
router.get("/:id", authorization, WishlistController.getById);
router.post("/", WishlistController.create);
router.put("/:id", authorization, WishlistController.update);
router.delete("/:id", authorization, WishlistController.delete);

module.exports = router;