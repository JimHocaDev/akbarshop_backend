const { Router } = require("express");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const {
  partnerEdit,
  partnerDelete,
  partnerGet,
  partnerPost,
} = require("../controllers/partner.controller");
const fileUpload = require("../middlewares/fileUpload");

const router = new Router();

router.post("/partner", isAuth, isAdmin, fileUpload, partnerPost);
router.get("/partner", partnerGet);
router.put("/partner/:id", isAuth, isAdmin, fileUpload, partnerEdit);
router.delete("/partner/:id", isAuth, isAdmin, partnerDelete);

module.exports = router;
