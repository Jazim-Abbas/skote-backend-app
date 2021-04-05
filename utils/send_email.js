const config = require("config");
const nodemailer = require("nodemailer");

const mailConfig = config.get("mail");
const transport = nodemailer.createTransport({
  // host: "smtp.mailtrap.io",
  // port: 2525,
  service: "gmail",
  auth: {
    user: mailConfig.username,
    pass: mailConfig.password,
  },
});

function sendMail(configs) {
  console.log(configs);
  return transport.sendMail({
    ...configs,
  });
}

module.exports = { sendMail };
