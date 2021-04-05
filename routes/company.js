const express = require("express");
const companyController = require("../controllers/company");

const router = express.Router();
router.post("/", companyController.save);

module.exports = router;
