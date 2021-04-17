const express = require("express");
const engageServiceRoutes = require("./engage");
const webGoalObjectiveRoutes = require("./wg_objective");
const webGoalRoutes = require("./wg_goal");
const webGoalActionRoutes = require("./wg_action");
const webGoalSitemapRoutes = require("./wg_sitemap");
const webGoalsFeatureRoutes = require("./wg_advanced_feature");

// design module
const likeRoutes = require("./design/like");
const dislikeRoutes = require("./design/dislike");
const colorRoutes = require("./design/color");

const router = express.Router();
router.use("/wg-goal", webGoalRoutes);
router.use("/checklist", engageServiceRoutes);
router.use("/wg-objective", webGoalObjectiveRoutes);
router.use("/wg-action", webGoalActionRoutes);
router.use("/wg-sitemap", webGoalSitemapRoutes);
router.use("/wg-advanced-feature", webGoalsFeatureRoutes);

// design module
router.use("/design/like", likeRoutes);
router.use("/design/dislike", dislikeRoutes);
router.use("/design/color", colorRoutes);

module.exports = router;
