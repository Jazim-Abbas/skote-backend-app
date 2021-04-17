const yup = require("yup");

const dislikeSchema = yup.object().shape({
  websites: yup.array().min(1).of(yup.string().url().required()).required(),
});

module.exports = { dislikeSchema };
