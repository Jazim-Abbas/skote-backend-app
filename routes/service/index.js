const express = require("express");
const engageServiceRoutes = require("./engage");

const router = express.Router();
router.use("/engage", engageServiceRoutes);

module.exports = router;
