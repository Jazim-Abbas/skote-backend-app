const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  websites: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Dislike = mongoose.model("Dislike", schema);
module.exports = Dislike;
