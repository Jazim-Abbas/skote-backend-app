const yup = require("yup");

const advancedFeatureSchema = yup.object().shape({
  feature: yup.string().min(3).max(500).required(),
});

module.exports = { advancedFeatureSchema };
