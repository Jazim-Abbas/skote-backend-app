const yup = require("yup");

const competitorSchema = yup.object().shape({
  description: yup.string().min(3).max(500).required(),
  web_addresses: yup.array().length(3).of(yup.string().url().required()),
});

module.exports = { competitorSchema };
