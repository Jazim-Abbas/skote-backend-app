const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  style: String,
  perceive: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Style = mongoose.model("Style", schema);
module.exports = Style;
