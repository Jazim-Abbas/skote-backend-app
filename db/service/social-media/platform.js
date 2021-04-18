const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  platforms: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const SP_Platform = mongoose.model("SP_Platform", schema);
module.exports = SP_Platform;
