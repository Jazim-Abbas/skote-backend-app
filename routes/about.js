const express = require("express");
const aboutController = require("../controllers/about");

const router = express.Router();
router
  .post("/", aboutController.store)
  .get("/", aboutController.getSingle)
  .patch("/:id", aboutController.update)
  .delete("/:id", aboutController.destroy);

module.exports = router;
