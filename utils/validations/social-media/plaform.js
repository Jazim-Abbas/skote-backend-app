const yup = require("yup");

const options = ["Facebook", "Instagram", "Linkedin", "Twitter", "Google Ads"];

const platformSchema = yup.object().shape({
  platforms: yup
    .array()
    .min(1)
    .of(yup.string().oneOf(options).required())
    .required(),
});

module.exports = { platformSchema };
