const Engage = require("./engage");
const WG_Goal = require("./wg_goal");
const WG_Objective = require("./wg_objective");
const WG_Action = require("./wg_action");
const WG_Sitemap = require("./wg_sitemap");
const WG_AdvancedFeature = require("./wg_advanced_feature");

// design module
const Like = require("./design/like");
const Dislike = require("./design/dislike");
const Color = require("./design/color");
const Style = require("./design/style");
const Content = require("./design/content");

// advertise module
const AD_Service = require("./advertise/service");
const AD_OfferInfo = require("./advertise/offer_info");
const Ad_OfferCompetitor = require("./advertise/offer_competitor");
const Ad_OfferCustomer = require("./advertise/offer_customer");
const Ad_OfferGoal = require("./advertise/offer_goal");
const Ad_TargetMarket = require("./advertise/offer_target_market");

// social-media module
const SP_Platform = require("./social-media/platform");
const SP_FbCredential = require("./social-media/fb_credential");
const SP_AccountInfo = require("./social-media/account_info");
const SP_WebInfo = require("./social-media/web_info");
const SP_Post = require("./social-media/posting");

// logo-design module
const LD_LogoDetail = require("./logo-design/logo_detail");
const LD_UploadLogo = require("./logo-design/upload_logo");

module.exports = {
  Engage,
  WG_Objective,
  WG_Goal,
  WG_Action,
  WG_Sitemap,
  WG_AdvancedFeature,

  // design module
  Like,
  Dislike,
  Color,
  Style,
  Content,

  // advertise module
  AD_Service,
  AD_OfferInfo,
  Ad_OfferCompetitor,
  Ad_OfferCustomer,
  Ad_OfferGoal,
  Ad_TargetMarket,

  // social-media module
  SP_Platform,
  SP_FbCredential,
  SP_AccountInfo,
  SP_WebInfo,
  SP_Post,

  // logo-design module
  LD_LogoDetail,
  LD_UploadLogo,
};
