const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  hasPreference: Boolean,
  preference: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Color = mongoose.model("Color", schema);
module.exports = Color;
