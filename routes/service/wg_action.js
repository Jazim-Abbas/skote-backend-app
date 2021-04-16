const express = require("express");
const { WG_Action } = require("../../db/service");
const BaseController = require("../../controllers/service/base");
const validation = require("../../utils/validations/wg_action");

const router = express.Router();
const baseController = new BaseController(
  WG_Action,
  validation.actionSchema,
  "web_development",
  "action"
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
