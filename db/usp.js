const mongoose = require("mongoose");

const uspSchema = new mongoose.Schema({
  description: String,
  strength: String,
  reason_to_choose: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const USP = mongoose.model("USP", uspSchema);
module.exports = USP;
