const yup = require("yup");

const objectiveSchema = yup.object().shape({
  achievement: yup.string().min(5).max(300).required(),
  success: yup.string().min(5).max(300).required(),
});

module.exports = { objectiveSchema };
