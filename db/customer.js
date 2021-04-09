const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customers: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
