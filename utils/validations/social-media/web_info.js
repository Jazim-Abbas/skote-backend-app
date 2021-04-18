const yup = require("yup");

const webInfoSchema = yup.object().shape({
  login_url: yup.string().url().required(),
  username: yup.string().required(),
  password: yup.string().required(),
});

module.exports = { webInfoSchema };
