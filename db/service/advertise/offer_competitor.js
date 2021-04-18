const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  description: String,
  websites: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Ad_OfferCompetitor = mongoose.model("Ad_OfferCompetitor", schema);
module.exports = Ad_OfferCompetitor;
