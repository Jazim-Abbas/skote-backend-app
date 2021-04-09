const yup = require("yup");

const customerSchema = yup.object().shape({
  customers: yup.array().of(yup.string().max(300).required()),
});

module.exports = { customerSchema };
