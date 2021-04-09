const mongoose = require("mongoose");

const marketSchema = new mongoose.Schema({
  niche_market: String,
  target_audience: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const TargetMarket = mongoose.model("TargetMarket", marketSchema);
module.exports = TargetMarket;
