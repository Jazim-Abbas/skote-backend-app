const yup = require("yup");

const likeSchema = yup.object().shape({
  websites: yup.array().min(3).of(yup.string().url().required()).required(),
  particular: yup.string().url().notRequired(),
});

module.exports = { likeSchema };
