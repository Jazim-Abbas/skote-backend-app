const TargetMarket = require("../../db/target_market");
const Exceptions = require("../../utils/custom_exceptions");

async function getSingle(user_id) {
  return await TargetMarket.findOne({ user: user_id }).select("-user");
}

async function store(detail, user_id) {
  const record = new TargetMarket({
    user: user_id,
    ...detail,
  });

  try {
    return await record.save();
  } catch (err) {
    throw new Exceptions.BadRequset("You already created the record");
  }
}

module.exports = { store, getSingle };
