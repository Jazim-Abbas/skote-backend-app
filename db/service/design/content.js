const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  has_content_ready: Boolean,
  need_help: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Content = mongoose.model("D_Content", schema);
module.exports = Content;
