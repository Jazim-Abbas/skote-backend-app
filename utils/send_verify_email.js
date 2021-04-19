const mailer = require("./send_email");
const generateToken = require("./generate_token");
const Exceptions = require("./custom_exceptions");
const authService = require("../services/auth");

async function sendVerifyEmail(email) {
  const user = await authService.isEmailExists(email);
  const token = await generateToken({ user_id: user._id }, "1d");

  try {
    await mailer.sendMail({
      to: email,
      subject: "Please verify your email",
      html: `
        <h1>Please verify your email addres.</h1>
        <a href='http://localhost:3000/verify/${token}'>Verify<a/>
      `,
    });
  } catch (err) {
    throw new Exceptions.HttpError(
      "Some problems while sending email",
      500,
      "SEND_EMAIL_FAILED"
    );
  }
}

module.exports = sendVerifyEmail;
