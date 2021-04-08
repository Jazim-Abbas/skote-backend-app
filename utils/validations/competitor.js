const yup = require("yup");

const competitorSchema = yup.object().shape({
  description: yup.string().min(3).max(500).required(),
  web_addresses: yup
    .array()
    .min(3)
    .max(3)
    .of(yup.string().url().required())
    .required(),
});

module.exports = { competitorSchema };
