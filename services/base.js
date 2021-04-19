const Exceptions = require("../utils/custom_exceptions");

async function getSingle(model, user, id) {
  let user_id;

  user_id = user.is_admin ? id : user._id;

  if (!user_id) {
    throw new Exceptions.BadRequset(
      "Please provide the user id in query id param in order to proceed .."
    );
  }

  return await model.findOne({ user: user_id }).select("-user");
}

module.exports = { getSingle };
