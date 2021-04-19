const Exceptions = require("../utils/custom_exceptions");

async function getSingle(model, user, recordId) {
  if (!user.is_admin) {
    return await model.findOne({ user: user._id }).select("-user");
  }

  if (!recordId) {
    throw new Exceptions.BadRequset(
      "Please provide the id in query param in order to proceed .."
    );
  }

  return await model.findOne({ _id: recordId }).select("-user");
}

module.exports = { getSingle };
