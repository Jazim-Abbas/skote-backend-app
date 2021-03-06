const config = require("config");

function checkEnvVariablesExist() {
  try {
    config.get("mail");
    config.get("db");
  } catch (err) {
    console.error("Error for env variables. Please set them up ...");
    process.exit(1);
  }
}

module.exports = checkEnvVariablesExist;
