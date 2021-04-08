const express = require("express");
const uspController = require("../../controllers/business/usp");

const router = express.Router();
router.post("/", uspController.store).get("/", uspController.fetchSingle);

module.exports = router;
