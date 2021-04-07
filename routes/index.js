const express = require("express");

const authRoutes = require("./auth");
const aboutRoutes = require("./about");
const companyRoutes = require("./company");
const businessRoutes = require("./business");
const isAuthMiddleware = require("../middlewares/is_auth");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/about", isAuthMiddleware, aboutRoutes);
router.use("/company", isAuthMiddleware, companyRoutes);
router.use("/business", businessRoutes);

module.exports = router;
