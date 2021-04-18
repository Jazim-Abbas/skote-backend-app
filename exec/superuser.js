const prompt = require("prompt");
const User = require("../db/user");
const dbConnect = require("../db/connect");

var schema = {
  properties: {
    name: {
      description: "Enter name",
      type: "string",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Name must be only letters, spaces, or dashes",
      required: true,
    },
    email: {
      description: "Enter email",
      type: "string",
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Email must be valid",
      required: true,
    },
    password: {
      description: "Enter password",
      hidden: true,
      required: true,
    },
    confirmPassword: {
      description: "Re-enter password",
      hidden: true,
      required: true,
      message: "Password not matched. Please type exact password",
      conform: function (confirmPass) {
        const pass = prompt.history("password").value;
        return confirmPass === pass;
      },
    },
  },
};

async function main() {
  prompt.start();
  let connection;

  try {
    connection = await dbConnect();

    const result = await prompt.get(schema);

    const user = new User({
      ...result,
      is_admin: true,
      company: "",
    });

    await user.save();
    console.log("Superuser is successfully created ...");
  } catch (err) {
    console.log(
      `Email ${
        prompt.history("email").value
      } is already exist. Try with different one ....`
    );
  } finally {
    connection.disconnect();
  }
}

main();
