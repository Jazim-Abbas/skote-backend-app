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

