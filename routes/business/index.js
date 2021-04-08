const express = require("express");
const introductionRoutes = require("./introduction");
const uspRoutes = require("./usp");

const router = express.Router();
router.use("/introduction", introductionRoutes);
router.use("/usp", uspRoutes);

module.exports = router;
