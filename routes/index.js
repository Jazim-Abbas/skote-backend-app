const express = require("express");

const userRoutes = require("./user");
const authRoutes = require("./auth");
const aboutRoutes = require("./about");
const companyRoutes = require("./company");
const serviceRoutes = require("./service");
const businessRoutes = require("./business");
const isAuthMiddleware = require("../middlewares/is_auth");

const router = express.Router();
router.use("/user", isAuthMiddleware, userRoutes);
router.use("/auth", authRoutes);
router.use("/about", isAuthMiddleware, aboutRoutes);
router.use("/company", isAuthMiddleware, companyRoutes);
router.use("/services", isAuthMiddleware, serviceRoutes);
router.use("/business", isAuthMiddleware, businessRoutes);

module.exports = router;
