const { Router } = require("express");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const {
  blogDelete,
  blogEdit,
  blogGet,
  blogPost,
  blogGetOne,
} = require("../controllers/blog.controller");
const fileUpload = require("../middlewares/fileUpload");

const router = new Router();

router.post("/blog", isAuth, isAdmin, fileUpload, blogPost);
router.get("/blog", blogGet);
router.get("/blog/:id", blogGetOne);
router.put("/blog/:id", isAuth, isAdmin, fileUpload, blogEdit);
router.delete("/blog/:id", isAuth, isAdmin, blogDelete);

module.exports = router;
