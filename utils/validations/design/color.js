const yup = require("yup");

const colorSchema = yup.object().shape({
  hasPreference: yup.boolean().required(),
  preference: yup.string().when("hasPreference", {
    is: true,
    then: yup.string().min(3).max(500).required(),
    otherwise: yup.string().max(0).notRequired(),
  }),
  //   preference: yup.object().when("hasPreference", {
  //     is: true,
  //     then: yup.string().min(3).max(500).required(),
  //     otherwise: yup.string().max(0).required(),
  //   }),
});

module.exports = { colorSchema };
