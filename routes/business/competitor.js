const express = require("express");
const competitorController = require("../../controllers/business/competitor");

const router = express.Router();
router.post("/", competitorController.store);

module.exports = router;
