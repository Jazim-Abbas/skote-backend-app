const yup = require("yup");

const postingSchema = yup.object().shape({
  voice_tone: yup.string().required(),
  no_post_specification: yup.string().required(),
  is_found: yup.boolean().required(),
  feedback: yup.string().required(),
});

module.exports = { postingSchema };
