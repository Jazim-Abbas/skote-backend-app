const mongoose = require("mongoose");

const engageSchema = new mongoose.Schema({
  services: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Engage = mongoose.model("Engage", engageSchema);
module.exports = Engage;
