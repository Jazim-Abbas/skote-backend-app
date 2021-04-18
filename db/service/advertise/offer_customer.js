const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  customers: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Ad_OfferCustomer = mongoose.model("Ad_OfferCustomer", schema);
module.exports = Ad_OfferCustomer;
