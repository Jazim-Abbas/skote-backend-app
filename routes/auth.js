const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Registration");
});

module.exports = router;
