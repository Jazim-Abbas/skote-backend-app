const express = require("express");
const competitorController = require("../../controllers/business/competitor");

const router = express.Router();
router
  .post("/", competitorController.store)
  .get("/", competitorController.fetchSingle)
  .patch("/:id", competitorController.update);

module.exports = router;
