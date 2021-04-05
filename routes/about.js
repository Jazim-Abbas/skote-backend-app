const express = require("express");
const aboutController = require("../controllers/about");

const router = express.Router();
router.post("/", aboutController.store).get("/", aboutController.getSingle);

module.exports = router;
