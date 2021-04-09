const express = require("express");
const marketController = require("../../controllers/business/target_market");

const router = express.Router();
router
  .post("/", marketController.store)
  .get("/", marketController.fetchSingle)
  .patch("/:id", marketController.update);

module.exports = router;
