const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  niche_market: String,
  target_audience: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Ad_TargetMarket = mongoose.model("Ad_TargetMarket", schema);
module.exports = Ad_TargetMarket;
