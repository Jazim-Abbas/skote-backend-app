const express = require("express");
const customerController = require("../../controllers/business/customer");

const router = express.Router();
router.post("/", customerController.store);

module.exports = router;
