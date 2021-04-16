const express = require("express");
const { WG_AdvancedFeature } = require("../../db/service");
const BaseController = require("../../controllers/service/base");
const validation = require("../../utils/validations/wg_advanced_feature");

const router = express.Router();
const baseController = new BaseController(
    WG_AdvancedFeature,
  validation.advancedFeatureSchema,
  "web_development",
  "feature"
);

router.get("/", (req, res) => {
  return baseController.fetchSingle(req, res);
});
router.post("/", (req, res) => {
  return baseController.store(req, res);
});
router.patch("/:id", (req, res) => {
  return baseController.update(req, res);
});
router.delete("/:id", (req, res) => {
  return baseController.destroy(req, res);
});

module.exports = router;
