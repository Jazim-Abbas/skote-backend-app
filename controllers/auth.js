const validation = require("../utils/validations/auth");
const schemaValidate = require("../utils/validations/validate");

async function register(req, res) {
  const userFields = await schemaValidate(validation.registerSchema, req.body);

  res.send(userFields);
}

async function login(req, res) {
  const userFields = await schemaValidate(validation.loginSchema, req.body);

  res.send(userFields);
}

async function passwordForget(req, res) {
  const fields = await schemaValidate(
    validation.passwordForgetSchema,
    req.body
  );
  
  res.send(fields);
}

module.exports = {
  register,
  login,
  passwordForget,
};
