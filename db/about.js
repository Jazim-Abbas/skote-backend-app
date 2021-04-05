const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  name: String,
  role: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const About = mongoose.model("About", aboutSchema);
module.exports = About;
