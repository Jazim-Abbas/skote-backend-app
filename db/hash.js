const mongoose = require("mongoose");

const hashSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true,
  },
});

const Hash = mongoose.model("Hash", hashSchema);
module.exports = Hash;
