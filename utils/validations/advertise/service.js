const yup = require("yup");

const serviceSchema = yup.object().shape({
  services: yup
    .array()
    .min(1)
    .max(2)
    .of(
      yup
        .string()
        .oneOf(["social_media_advertise", "google_advertise"])
        .required()
    )
    .required(),
});

module.exports = { serviceSchema };
