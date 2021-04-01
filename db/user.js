const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  company: String,
  email: String,
  password: String,
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
