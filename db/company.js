const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  logo: String,
  bus_name: String,
  bus_email: String,
  bus_phone: String,
  bus_address: String,
  website_link: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
