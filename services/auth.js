const User = require("../db/user");
const Exception = require("../utils/custom_exceptions");

exports.createUser = async function (user) {
  const userInDb = await findUserByEmail(user.email);

  if (userInDb)
    throw new Exception.EmailExist("Please try with different email");

  const _user = new User({ ...user });
  return await _user.save();
};

function findUserByEmail(email) {
  return User.findOne({ email });
}
