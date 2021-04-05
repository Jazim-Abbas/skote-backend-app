const Company = require("../db/company");
const Exceptions = require("../utils/custom_exceptions");

async function getSingle(user_id) {
  return await Company.findOne({ user: user_id }).select("-user");
}

async function save(company, user_id) {
  const record = new Company({
    user: user_id,
    ...company,
  });

  try {
    return await record.save();
  } catch (err) {
    throw new Exceptions.BadRequset("You already created the record");
  }
}

module.exports = {
  save,
  getSingle,
};
