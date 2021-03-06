const TargetMarket = require("../../db/target_market");
const Exceptions = require("../../utils/custom_exceptions");
const baseService = require("../base");

async function getSingle(req) {
  return await baseService.getSingle(TargetMarket, req.user, req.query.id);
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

async function update(detail, id) {
  const updatedRecord = await TargetMarket.findByIdAndUpdate(
    id,
    { $set: { ...detail } },
    { new: true }
  ).select("-user");

  if (!updatedRecord)
    throw new Exceptions.NotFound("Record is not found you are requested ..");

  return updatedRecord;
}

async function destroy(id) {
  console.log(id);
  try {
    const recordInDb = await TargetMarket.findByIdAndDelete(id);
    if (!recordInDb.$isDeleted) throw new Error("err");
  } catch (err) {
    throw new Exceptions.NotFound("Record is not found you are requested ..");
  }
}

module.exports = { store, getSingle, update, destroy };
