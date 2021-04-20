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
const styleRoutes = require("./design/style");
const contentRoutes = require("./design/content");

// advertise module
const advertise_serviceRoutes = require("./advertise/service");
const advertise_offerInfoRoutes = require("./advertise/offer_info");
const advertise_competitorRoutes = require("./advertise/offer_competitor");
const advertise_customerRoutes = require("./advertise/offer_customer");
const advertise_goalRoutes = require("./advertise/offer_goal");
const advertise_targetMarketRoutes = require("./advertise/offer_target_market");

// social-media module
const sp_platformRoutes = require("./social-media/platform");
const sp_fbCredentialRoutes = require("./social-media/fb_credential");
const sp_accountInfoRoutes = require("./social-media/account_info");
const sp_webInfoRoutes = require("./social-media/web_info");
const sp_postRoutes = require("./social-media/posting");

// logo-design module
const ld_logoDetailRoutes = require("./logo-design/logo_detail");
const ld_uploadLogoRoutes = require("./logo-design/upload_logo");

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
router.use("/design/style", styleRoutes);
router.use("/design/content", contentRoutes);

// advertise module
router.use("/advertise/service", advertise_serviceRoutes);
router.use("/advertise/offer-info", advertise_offerInfoRoutes);
router.use("/advertise/offer-competitor", advertise_competitorRoutes);
router.use("/advertise/offer-customer", advertise_customerRoutes);
router.use("/advertise/offer-goal", advertise_goalRoutes);
router.use("/advertise/offer-target", advertise_targetMarketRoutes);

// social-media module
router.use("/social-media/platform", sp_platformRoutes);
router.use("/social-media/fb-credential", sp_fbCredentialRoutes);
router.use("/social-media/account-info", sp_accountInfoRoutes);
router.use("/social-media/web-info", sp_webInfoRoutes);
router.use("/social-media/post", sp_postRoutes);

// logo-design module
router.use("/logo-design/detail", ld_logoDetailRoutes);
router.use("/logo-design/upload-logo", ld_uploadLogoRoutes);

module.exports = router;
