const yup = require("yup");

const contentSchema = yup.object().shape({
  has_content_ready: yup.boolean().required(),
  need_help: yup.boolean().required(),
});

module.exports = { contentSchema };
