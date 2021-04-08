const mongoose = require("mongoose");

const uspSchema = new mongoose.Schema({
  description: String,
  strength: String,
  reason_to_choose: String,
});

const USP = mongoose.model("USP", uspSchema);
module.exports = USP;
