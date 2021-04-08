const mongoose = require("mongoose");

const competitorSchema = new mongoose.Schema({
  description: String,
  web_addresses: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Competitor = mongoose.model("Competitor", competitorSchema);
module.exports = Competitor;
