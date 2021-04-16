const express = require("express");
const { WG_Goal } = require("../../db/service");
const BaseController = require("../../controllers/service/base");
const validation = require("../../utils/validations/wg_goal");

const router = express.Router();
const baseController = new BaseController(
  WG_Goal,
  validation.goalSchema,
  "web_development",
  "goal"
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
