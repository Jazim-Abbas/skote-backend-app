const yup = require("yup");

const introSchema = yup.object().shape({
  bus_short_desc: yup.string().min(5).max(500).required(),
  company_do: yup.string().min(5).max(500).required(),
  products: yup.array().of(yup.string().min(3).required()),
});

module.exports = { introSchema };
