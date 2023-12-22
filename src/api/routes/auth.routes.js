const { Router } = require("express");
const {
  loginAdmin,
  loginUser,
  registerUser,
} = require("../controllers/auth.controller");

const router = new Router();

router.post("/auth/admin", loginAdmin);
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);

module.exports = router;
