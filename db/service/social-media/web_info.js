const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  login_url: String,
  username: String,
  password: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const SP_WebInfo = mongoose.model("SP_WebInfo", schema);
module.exports = SP_WebInfo;
