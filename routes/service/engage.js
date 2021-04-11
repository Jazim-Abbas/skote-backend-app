const express = require("express");
const engageServiceController = require("../../controllers/service/engage");

const router = express.Router();
router
  .post("/", engageServiceController.store)
  .get("/", engageServiceController.fetchSingle)
  .patch("/:id", engageServiceController.update)
  .delete("/:id", engageServiceController.destroy);

module.exports = router;
