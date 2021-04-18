const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  exact_text: String,
  tagline: String,
  has_color_preference: Boolean,
  color_preference: String,
  style: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const LD_LogoDetail = mongoose.model("LD_LogoDetail", schema);
module.exports = LD_LogoDetail;
