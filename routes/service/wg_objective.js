const express = require("express");
const { WG_Objective } = require("../../db/service");
const BaseController = require("../../controllers/service/base");

const router = express.Router();
const baseController = new BaseController(
  WG_Objective,
  "web_development",
  "objective"
);

router.get("/", (req, res) => {
  baseController.fetchSingle(req, res);
});
router.post("/", (req, res) => {
  baseController.store(req, res);
});
router.patch("/:id", (req, res) => {
  baseController.update(req, res);
});
router.delete("/:id", (req, res) => {
  baseController.destroy(req, res);
});

module.exports = router;
