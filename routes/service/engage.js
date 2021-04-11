const express = require("express");
const engageServiceController = require("../../controllers/service/engage");

const router = express.Router();
router.post("/", engageServiceController.store);

module.exports = router;
