const config = require("config");
const nodemailer = require("nodemailer");

const mailConfig = config.get("mail");
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: mailConfig.username,
    pass: mailConfig.password,
  },
});

function sendMail(email) {
  return transport.sendMail({
    to: email,
    subject: "Please Verify your email",
    text: "Verify ...",
  });
}

module.exports = { sendMail };
