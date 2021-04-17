const yup = require("yup");

const styleSchema = yup.object().shape({
  style: yup.string().min(3).max(500).required(),
  perceive: yup.string().min(3).max(500).required(),
});

module.exports = { styleSchema };
