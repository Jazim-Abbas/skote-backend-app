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

async function update(about, id) {
  try {
    return await About.findByIdAndUpdate(
      id,
      { $set: { ...about } },
      { new: true }
    ).select("-user");
  } catch (err) {
    throw new Exceptions.NotFound("Record is not found you are requested ..");
  }
}

module.exports = {
  save,
  getSingleRecord,
  update,
};
