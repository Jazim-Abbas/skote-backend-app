const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  voice_tone: String,
  no_post_specification: String,
  is_found: Boolean,
  feedback: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const SP_Post = mongoose.model("SP_Post", schema);
module.exports = SP_Post;
