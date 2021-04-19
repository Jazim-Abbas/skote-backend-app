const Exception = require("../utils/custom_exceptions");

module.exports = function (err, req, res, next) {
  let statusCode = 500;
  let message = "Server error";
  let name = "SERVER_ERROR";
  let errors = [];

  console.log("error", err);

  if (err instanceof Exception.HttpError) {
    if (err instanceof Exception.ValidationError) {
      errors = err.errors;
    }
    statusCode = err.statusCode;
    message = err.message;
    name = err.name;
  }

  res.status(statusCode).send({ message, name, errors });
};
