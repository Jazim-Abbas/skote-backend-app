const yup = require("yup");

const goalSchema = yup.object().shape({
  goal: yup.string().min(3).max(300).required(),
});

module.exports = { goalSchema };
