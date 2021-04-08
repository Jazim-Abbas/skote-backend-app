const yup = require("yup");

const uspSchema = yup.object().shape({
  description: yup.string().min(3).max(500).required(),
  strength: yup.string().min(3).max(100).required(),
  reason_to_choose: yup.string().min(3).max(500).required(),
});

module.exports = { uspSchema };
