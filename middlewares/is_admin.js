const Exceptions = require("../utils/custom_exceptions");

module.exports = async function (req, res, next) {
  const user = req.user;

  if (user.is_admin) {
    next();
  } else {
    throw new Exceptions.AccessDenied("Access Denied. You are not admin ..");
  }
};
