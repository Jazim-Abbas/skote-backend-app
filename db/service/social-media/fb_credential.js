const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  credential: String,
  first: String,
  last: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const SP_FbCredential = mongoose.model("SP_FbCredential", schema);
module.exports = SP_FbCredential;
