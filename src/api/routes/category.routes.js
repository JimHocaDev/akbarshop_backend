const { Router } = require("express");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const {
  categoryDelete,
  categoryEdit,
  categoryGet,
  categoryPost,
} = require("../controllers/category.controller");

const router = new Router();

router.post("/category", isAuth, isAdmin, categoryPost);
router.get("/category", categoryGet);
router.put("/category/:id", isAuth, isAdmin, categoryEdit);
router.delete("/category/:id", isAuth, isAdmin, categoryDelete);

module.exports = router;
