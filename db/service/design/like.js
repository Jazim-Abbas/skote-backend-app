const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  websites: [String],
  particular: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Like = mongoose.model("Like", schema);
module.exports = Like;
