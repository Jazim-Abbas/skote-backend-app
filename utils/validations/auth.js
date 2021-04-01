const yup = require("yup");

const registerSchema = yup.object().shape({
  name: yup.string().min(5).max(30).require(),
  company: yup.string().required(),
  password: yup.string().min(8).max(30).required(),
});

module.exports = {
  registerSchema,
};
