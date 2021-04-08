const express = require("express");
const uspController = require("../../controllers/business/usp");

const router = express.Router();
router
  .post("/", uspController.store)
  .get("/", uspController.fetchSingle)
  .patch("/:id", uspController.update)
  .delete("/:id", uspController.destroy);

module.exports = router;
