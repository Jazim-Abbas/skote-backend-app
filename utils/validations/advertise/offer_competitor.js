const yup = require("yup");

const competitorSchema = yup.object().shape({
  description: yup.string().min(5).max(500).required(),
  websites: yup.array().min(1).of(yup.string().url().required()).required(),
});

module.exports = { competitorSchema };
