const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  action: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const WG_Action = mongoose.model("WG_Action", schema);
module.exports = WG_Action;
