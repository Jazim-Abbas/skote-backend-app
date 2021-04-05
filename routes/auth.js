const express = require("express");
const authController = require("../controllers/auth");

const router = express.Router();

router
  .post("/register", authController.register)
  .post("/login", authController.login)
  .post("/password-forget", authController.passwordForget)
  .post("/verify-email", authController.sendEmailForVerification);

module.exports = router;
