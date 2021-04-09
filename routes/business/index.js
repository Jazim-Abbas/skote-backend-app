const express = require("express");
const uspRoutes = require("./usp");
const customerRoutes = require("./customer");
const competitorRoutues = require("./competitor");
const introductionRoutes = require("./introduction");
const targetMarketRoutes = require("./target_market");

const router = express.Router();
router.use("/usp", uspRoutes);
router.use("/competitor", competitorRoutues);
router.use("/introduction", introductionRoutes);
router.use("/market", targetMarketRoutes);
router.use("/customer", customerRoutes);

module.exports = router;
