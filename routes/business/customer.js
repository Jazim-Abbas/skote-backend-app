const express = require("express");
const customerController = require("../../controllers/business/customer");

const router = express.Router();
router
  .post("/", customerController.store)
  .get("/", customerController.fetchSingle)
  .patch("/:id", customerController.update)
  .delete("/:id", customerController.destroy);

module.exports = router;
