const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  feature: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const WG_ExtraFeature = mongoose.model("WG_ExtraFeature", schema);
module.exports = WG_ExtraFeature;
