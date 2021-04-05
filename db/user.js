const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const generateToken = require("../utils/generate_token");

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

userSchema.pre("save", hashPassword);
function hashPassword(next) {
  var user = this;

  if (!user.password) return next();

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
}

userSchema.method("comparePassword", async function (password) {
  return await bcrypt.compare(password, this.password);
});

userSchema.method("generateToken", async function () {
  const payload = { _id: this._id, name: this.name, email: this.email };
  return await generateToken(payload);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
