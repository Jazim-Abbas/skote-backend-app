const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  bus_short_desc: String,
  company_do: String,
  products: [String],
});

const Introduction = mongoose.model("Introduction", introSchema);
module.exports = Introduction;
