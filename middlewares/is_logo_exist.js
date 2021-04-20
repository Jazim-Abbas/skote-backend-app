const Exceptions = require("../utils/custom_exceptions");

module.exports = function (req, res, next) {
  if (!req.file) {
    throw new Exceptions.ValidationError("Logo file is missing");
  }

  next();
};
