const yup = require("yup");

const sitemapSchema = yup.object().shape({
  indication: yup.string().min(3).max(300).required(),
  outline: yup.string().min(3).max(300).required(),
});

module.exports = { sitemapSchema };
