const express = require("express");
const { Dislike } = require("../../../db/service/");
const BaseController = require("../../../controllers/service/base");
const validation = require("../../../utils/validations/design/dislike");

const router = express.Router();
const baseController = new BaseController(
  Dislike,
  validation.dislikeSchema,
  "web_development",
  "dislike"
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
