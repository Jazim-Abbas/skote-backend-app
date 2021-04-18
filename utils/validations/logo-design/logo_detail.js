const yup = require("yup");

const logoDetailSchema = yup.object().shape({
  exact_text: yup.string().required(),
  tagline: yup.string().required(),
  has_color_preference: yup.boolean().required(),
  color_preference: yup.string().when("has_color_preference", {
    is: true,
    then: yup.string().required(),
    otherwise: yup.string().notRequired(),
  }),
  style: yup.string().required(),
});

module.exports = { logoDetailSchema };
