const yup = require("yup");

const uploadLogoSchema = yup.object().shape({
  likes_url: yup.array().min(3).of(yup.string().url().required()).notRequired(),
  dislikes_url: yup
    .array()
    .min(3)
    .of(yup.string().url().required())
    .notRequired(),
});

module.exports = { uploadLogoSchema };
