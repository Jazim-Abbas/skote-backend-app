const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  has_difference_access: Boolean,
  info: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const SP_AccountInfo = mongoose.model("SP_AccountInfo", schema);
module.exports = SP_AccountInfo;
