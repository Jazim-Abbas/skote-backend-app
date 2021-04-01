const { omit: _omit } = require("underscore");

const authService = require("../services/auth");
const validation = require("../utils/validations/auth");
const schemaValidate = require("../utils/validations/validate");

async function register(req, res) {
  const fields = await schemaValidate(validation.registerSchema, req.body);
  await authService.createUser(fields);

  res.send("Successfully created the user ...");
}

async function login(req, res) {
  const { email, password } = await schemaValidate(
    validation.loginSchema,
    req.body
  );
  const user = await authService.login(email, password);
  res.send(await setTokenInUser(user));
}

async function passwordForget(req, res) {
  const fields = await schemaValidate(
    validation.passwordForgetSchema,
    req.body
  );

  res.send(fields);
}

async function setTokenInUser(user) {
  const _user = { ...user._doc };
  return _omit(_user, "password", "__v");
}

module.exports = {
  register,
  login,
  passwordForget,
};
