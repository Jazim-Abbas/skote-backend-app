const yup = require("yup");

const companySchema = yup.object().shape({
  // logo: yup.string().notRequired(),
  bus_name: yup.string().max(100).required(),
  bus_email: yup.string().max(300).required(),
  bus_phone: yup.string().max(13).required(),
  bus_address: yup.string().max(500).required(),
  website_link: yup.string().url().required(),
});

module.exports = { companySchema };
