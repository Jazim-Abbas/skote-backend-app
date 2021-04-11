const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  achievement: String,
  success: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const WG_Objective = mongoose.model("WG_Objective", schema);
module.exports = WG_Objective;
