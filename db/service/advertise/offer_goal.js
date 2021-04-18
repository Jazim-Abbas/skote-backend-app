const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  goal: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Ad_OfferGoal = mongoose.model("Ad_OfferGoal", schema);
module.exports = Ad_OfferGoal;
