const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  logo: String,
  likes_logo: [String],
  dislikes_logo: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const LD_UploadLogo = mongoose.model("LD_UploadLogo", schema);
module.exports = LD_UploadLogo;
