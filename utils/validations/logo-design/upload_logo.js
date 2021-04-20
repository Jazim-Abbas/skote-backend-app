const yup = require("yup");

const uploadLogoSchema = yup.object().shape({
  likes_logo: yup.array().min(3).of(yup.string().url().required()).required(),
  dislikes_logo: yup
    .array()
    .min(3)
    .of(yup.string().url().required())
    .required(),
});

module.exports = { uploadLogoSchema };
