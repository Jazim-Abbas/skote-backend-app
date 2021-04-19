const config = require("config");
const jwt = require("jsonwebtoken");
const Exception = require("../utils/custom_exceptions");

module.exports = async function (req, res, next) {
  const token = req.body.token;
  if (!token) throw new Exception.BadRequset("The token identifier is missing");

  try {
    jwt.verify(token, config.get("jwt.secret"));
    next();
  } catch (err) {
    throw new Exception.EmailExpire("Email has been expired. Again verify ..");
  }
};
