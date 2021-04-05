const express = require("express");
const companyController = require("../controllers/company");

const router = express.Router();
router.post("/", companyController.save).get("/", companyController.getSingle);

module.exports = router;
