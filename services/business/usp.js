const USP = require("../../db/usp");
const Exceptions = require("../../utils/custom_exceptions");

async function getSingle(user_id) {
  return await USP.findOne({ user: user_id }).select("-user");
}

async function store(detail, user_id) {
  const record = new USP({
    user: user_id,
    ...detail,
  });

  try {
    return await record.save();
  } catch (err) {
    throw new Exceptions.BadRequset("You already created the record");
  }
}

async function update(detail, id) {
  const updatedRecord = await USP.findByIdAndUpdate(
    id,
    { $set: { ...detail } },
    { new: true }
  ).select("-user");

  if (!updatedRecord)
    throw new Exceptions.NotFound("Record is not found you are requested ..");

  return updatedRecord;
}

module.exports = {
  store,
  getSingle,
  update,
};
