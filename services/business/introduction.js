const Introduction = require("../../db/introduction");
const Exceptions = require("../../utils/custom_exceptions");
const baseService = require("../base");

async function getSingle(req) {
  return await baseService.getSingle(Introduction, req.user, req.query.id);
}

async function store(detail, user_id) {
  const introRecord = new Introduction({
    user: user_id,
    ...detail,
  });

  try {
    return await introRecord.save();
  } catch (err) {
    throw new Exceptions.BadRequset("You already created the record");
  }
}

async function update(detail, id) {
  const updatedRecord = await Introduction.findByIdAndUpdate(
    id,
    { $set: { ...detail } },
    { new: true }
  ).select("-user");

  if (!updatedRecord)
    throw new Exceptions.NotFound("Record is not found you are requested ..");

  return updatedRecord;
}

async function destroy(id) {
  try {
    const recordInDb = await Introduction.findByIdAndDelete(id);
    if (!recordInDb.$isDeleted) throw new Error("err");
  } catch (err) {
    throw new Exceptions.NotFound("Record is not found you are requested ..");
  }
}

module.exports = {
  store,
  getSingle,
  update,
  destroy,
};
