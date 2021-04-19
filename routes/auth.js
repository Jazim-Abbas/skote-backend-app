const express = require("express");
const authController = require("../controllers/auth");
const isEmailExpire = require("../middlewares/is_email_expires");

const router = express.Router();

router
  .post("/register", authController.register)
  .post("/login", authController.login)
  .post("/password-forget", authController.passwordForget)
  .post("/send-email", authController.sendEmailForVerification)
  .post("/verify-email", isEmailExpire, authController.verifyEmail);

module.exports = router;
