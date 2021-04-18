const yup = require("yup");

const options = [
  "Yes I have an ad account number",
  "I am not sure",
  "I don't have an ad account number",
];

const accountInfoSchema = yup.object().shape({
  has_difference_access: yup.boolean().required(),
  info: yup.string().oneOf(options).required(),
});

module.exports = { accountInfoSchema };
