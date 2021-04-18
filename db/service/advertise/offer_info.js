const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  region: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const AD_OfferInfo = mongoose.model("AD_OfferInfo", schema);
module.exports = AD_OfferInfo;
