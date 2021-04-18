const yup = require("yup");

const infoSchema = yup.object().shape({
  region: yup.string().max(500).required(),
});

module.exports = { infoSchema };
