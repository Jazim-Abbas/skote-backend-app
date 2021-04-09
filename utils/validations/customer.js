const yup = require("yup");

const customerSchema = yup.object().shape({
  customers: yup.array().min(1).of(yup.string().max(300).required()),
});

module.exports = { customerSchema };
