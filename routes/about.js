const express = require("express");
const aboutController = require("../controllers/about");
const isAuthMiddleware = require("../middlewares/is_auth");

const router = express.Router();
router.post("/", isAuthMiddleware, aboutController.store);

module.exports = router;
