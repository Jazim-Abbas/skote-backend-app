const { omit: _omit } = require("underscore");

const authService = require("../services/auth");
const validation = require("../utils/validations/auth");
const schemaValidate = require("../utils/validations/validate");

async function register(req, res) {
  const fields = await schemaValidate(validation.registerSchema, req.body);
  await authService.createUser(fields);
  res.send({ message: "Successfully created the user ..." });
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
  const { email } = await schemaValidate(
    validation.passwordForgetSchema,
    req.body
  );
  await authService.isEmailExists(email);
  res.send("Check your email to change the password ...");
}

async function setTokenInUser(user) {
  const _user = { ...user._doc, token: await user.generateToken() };
  return _omit(_user, "password", "__v");
}

module.exports = {
  register,
  login,
  passwordForget,
};
