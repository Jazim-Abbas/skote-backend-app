const express = require("express");
const introductionRoutes = require("./introduction");

const router = express.Router();
router.use("/introduction", introductionRoutes);

module.exports = router;
