const { omit: _omit } = require("underscore");

async function setTokenInUser(user) {
  const _user = { ...user._doc, token: await user.generateToken() };
  return _omit(_user, "password", "__v");
}

module.exports = setTokenInUser;
