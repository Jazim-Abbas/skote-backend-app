const express = require("express");
const { Content } = require("../../../db/service/");
const BaseController = require("../../../controllers/service/base");
const validation = require("../../../utils/validations/design/content");

const router = express.Router();
const baseController = new BaseController(
  Content,
  validation.contentSchema,
  "web_development",
  "content"
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
