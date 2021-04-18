const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  services: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const AD_Service = mongoose.model("AD_Service", schema);
module.exports = AD_Service;
