const Exceptions = require("../utils/custom_exceptions");

module.exports = async function (req, res, next) {
  if (req.user.is_admin) {
    next();
  } else {
    throw new Exceptions.AccessDenied("Access Denied. You are not admin ..");
  }
};
