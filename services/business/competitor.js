const Competitor = require("../../db/competitor");
const Exceptions = require("../../utils/custom_exceptions");

async function getSingle(user_id) {
  return await Competitor.findOne({ user: user_id }).select("-user");
}

async function store(detail, user_id) {
  const introRecord = new Competitor({
    user: user_id,
    ...detail,
  });

  try {
    return await introRecord.save();
  } catch (err) {
    throw new Exceptions.BadRequset("You already created the record");
  }
}

module.exports = { store, getSingle };
