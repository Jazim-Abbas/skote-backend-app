const jwt = require("jsonwebtoken");
const config = require("config");

async function generateToken(payload, expires = "30d") {
  return jwt.sign(payload, config.get("jwt.secret"), { expiresIn: expires });
}

module.exports = generateToken;
