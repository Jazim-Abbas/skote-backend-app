const express = require("express");
const authRoutes = require("./auth");
const aboutRoutes = require("./about");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/about", aboutRoutes);

module.exports = router;
