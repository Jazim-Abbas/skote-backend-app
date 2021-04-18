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
};
