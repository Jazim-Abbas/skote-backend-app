const express = require("express");
const engageServiceRoutes = require("./engage");
const webGoalObjectiveRoutes = require("./wg_objective");
const webGoalRoutes = require("./wg_goal");
const webGoalActionRoutes = require("./wg_action");
const webGoalSitemapRoutes = require("./wg_sitemap");
const webGoalsFeatureRoutes = require("./wg_advanced_feature");

const router = express.Router();
router.use("/wg-goal", webGoalRoutes);
router.use("/checklist", engageServiceRoutes);
router.use("/wg-objective", webGoalObjectiveRoutes);
router.use("/wg-action", webGoalActionRoutes);
router.use("/wg-sitemap", webGoalSitemapRoutes);
router.use("/wg-advanced-feature", webGoalsFeatureRoutes);

module.exports = router;
