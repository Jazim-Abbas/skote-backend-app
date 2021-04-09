const yup = require("yup");

const marketSchema = yup.object().shape({
  niche_market: yup.string().min(3).max(500).required(),
  target_audience: yup.string().min(3).max(500).required(),
});

module.exports = { marketSchema };
