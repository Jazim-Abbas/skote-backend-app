const yup = require("yup");

const aboutSchema = yup.object().shape({
  name: yup.string().min(3).max(50).required(),
  role: yup.string().min(3).max(50).required(),
});

module.exports = {
  aboutSchema,
};
