const { Router } = require("express");
const isAuth = require("../middlewares/isAuth");
const {
  cartDelete,
  cartGet,
  cartPost,
} = require("../controllers/cart.controller");

const router = new Router();

router.post("/cart", isAuth, cartPost);
router.get("/cart", isAuth, cartGet);
router.delete("/cart/:id", isAuth, cartDelete);

module.exports = router;
