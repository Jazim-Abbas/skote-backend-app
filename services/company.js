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

async function update(company, id) {
  const updatedRecord = await Company.findByIdAndUpdate(
    id,
    { $set: { ...company } },
    { new: true }
  ).select("-user");

  if (!updatedRecord)
    throw new Exceptions.NotFound("Record is not found you are requested ..");

  return updatedRecord;
}

async function destroy(id) {
  try {
    const recordInDb = await Company.findByIdAndDelete(id);
    if (!recordInDb.$isDeleted) throw new Error("err");
  } catch (err) {
    throw new Exceptions.NotFound("Record is not found you are requested ..");
  }
}

module.exports = {
  save,
  getSingle,
  update,
  destroy,
};
