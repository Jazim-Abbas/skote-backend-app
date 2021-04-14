const express = require("express");
const objectiveController = require("../../controllers/service/wg_objective");

const router = express.Router();
router
  .post("/", objectiveController.store)
  .get("/", objectiveController.fetchSingle);

module.exports = router;
