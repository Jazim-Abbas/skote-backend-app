const validation = require("../utils/validations/auth");
const schemaValidate = require("../utils/validations/validate");

async function register(req, res) {
  const userFields = await schemaValidate(validation.registerSchema, req.body);

  res.send(userFields);
}

module.exports = {
  register,
};
