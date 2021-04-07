const express = require("express");
const introductionController = require("../../controllers/business/introduction");

const router = express.Router();
router
  .post("/", introductionController.store)
  .get("/", introductionController.fetchSingle);

module.exports = router;
