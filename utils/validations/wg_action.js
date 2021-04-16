const yup = require("yup");

const actionSchema = yup.object().shape({
  action: yup.string().min(3).max(300).required(),
});

module.exports = { actionSchema };
