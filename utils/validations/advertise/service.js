const yup = require("yup");

const serviceSchema = yup.object().shape({
  services: yup
    .array()
    .min(1)
    .max(2)
    .of(
      yup
        .string()
        .oneOf(["Social Media Advertising", "Google Advertising"])
        .required()
    )
    .required(),
});

module.exports = { serviceSchema };
