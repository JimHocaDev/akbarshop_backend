const { Router } = require("express");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const {
  clothPost,
  clothDelete,
  clothEdit,
  clothGet,
  clothGetOne,
} = require("../controllers/cloth.controller");
const fileUpload = require("../middlewares/fileUpload");

const router = new Router();

router.post("/cloth", isAuth, isAdmin, fileUpload, clothPost);
router.get("/cloth", clothGet);
router.get("/cloth/:id", clothGetOne);
router.put("/cloth/:id", isAuth, isAdmin, fileUpload, clothEdit);
router.delete("/cloth/:id", isAuth, isAdmin, clothDelete);

module.exports = router;
