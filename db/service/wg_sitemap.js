const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  indication: String,
  outline: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const WG_Sitemap = mongoose.model("WG_Sitemap", schema);
module.exports = WG_Sitemap;
