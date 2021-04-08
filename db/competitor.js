const mongoose = require("mongoose");

const competitorSchema = new mongoose.Schema({
  description: String,
  web_addresses: [String],
});

const Competitor = mongoose.model("Competitor", competitorSchema);
module.exports = Competitor;
