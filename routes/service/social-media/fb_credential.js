const express = require("express");
const { SP_FbCredential } = require("../../../db/service");
const BaseController = require("../../../controllers/service/base");
const validation = require("../../../utils/validations/social-media/fb_credential");

const router = express.Router();
const baseController = new BaseController(
  SP_FbCredential,
  validation.fbCredential,
  "social_media_marketing",
  "payload"
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
