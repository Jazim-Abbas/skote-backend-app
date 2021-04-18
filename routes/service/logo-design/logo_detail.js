const express = require("express");
const { LD_LogoDetail } = require("../../../db/service");
const BaseController = require("../../../controllers/service/base");
const validation = require("../../../utils/validations/logo-design/logo_detail");

const router = express.Router();
const baseController = new BaseController(
  LD_LogoDetail,
  validation.logoDetailSchema,
  "logo_creation",
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
