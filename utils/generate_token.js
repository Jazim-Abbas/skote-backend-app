const jwt = require("jsonwebtoken");
const config = require("config");

async function generateToken(payload) {
  return jwt.sign(payload, config.get("jwt.secret"));
}

module.exports = generateToken;
