const express = require("express");
const companyController = require("../controllers/company");
const uploads = require("../utils/upload-image");

const router = express.Router();
router
  .post("/", uploads.single("logo"), companyController.save)
  .get("/", companyController.getSingle)
  .patch("/:id", uploads.single("logo"), companyController.update)
  .delete("/:id", companyController.destroy);

module.exports = router;
