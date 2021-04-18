const express = require("express");
const { SP_AccountInfo } = require("../../../db/service");
const BaseController = require("../../../controllers/service/base");
const validation = require("../../../utils/validations/social-media/account_info");

const router = express.Router();
const baseController = new BaseController(
  SP_AccountInfo,
  validation.accountInfoSchema,
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
