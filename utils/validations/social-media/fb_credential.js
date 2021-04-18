const yup = require("yup");

const fbCredential = yup.object().shape({
  credential: yup.string().required(),
  first: yup.string().required(),
  last: yup.string().required(),
});

module.exports = { fbCredential };
