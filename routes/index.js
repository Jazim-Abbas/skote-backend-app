const express = require("express");

const authRoutes = require("./auth");
const aboutRoutes = require("./about");
const isAuthMiddleware = require("../middlewares/is_auth");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/about", isAuthMiddleware, aboutRoutes);

module.exports = router;
