const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  goal: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const WG_Goal = mongoose.model("WG_Goal", schema);
module.exports = WG_Goal;
