const About = require("../db/about");
const Exceptions = require("../utils/custom_exceptions");

async function getSingleRecord(user_id) {
  return await About.findOne({ user: user_id }).select("-user");
}

async function save(about, user_id) {
  const record = new About({
    user: user_id,
    ...about,
  });

  try {
    return await record.save();
  } catch (err) {
    throw new Exceptions.BadRequset("You already created the record");
  }
}

module.exports = {
  save,
  getSingleRecord,
};
