const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  logo: String,
  logo_likes: [String],
  logo_dislikes: [String],
  is_logo_like_img: {
    type: Boolean,
    default: true,
  },
  is_logo_dislike_img: {
    type: Boolean,
    default: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const LD_UploadLogo = mongoose.model("LD_UploadLogo", schema);
module.exports = LD_UploadLogo;
