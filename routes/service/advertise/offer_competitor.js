const express = require("express");
const { Ad_OfferCompetitor } = require("../../../db/service");
const BaseController = require("../../../controllers/service/base");
const validation = require("../../../utils/validations/advertise/offer_competitor");

const router = express.Router();
const baseController = new BaseController(
  Ad_OfferCompetitor,
  validation.competitorSchema,
  "paid_advertising",
  "competitor"
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
