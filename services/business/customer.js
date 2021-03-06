const Customer = require("../../db/customer");
const Exceptions = require("../../utils/custom_exceptions");
const baseService = require("../base");

async function getSingle(req) {
  return await baseService.getSingle(Customer, req.user, req.query.id);
}

async function store(detail, user_id) {
  const record = new Customer({
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
  const updatedRecord = await Customer.findByIdAndUpdate(
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
    const recordInDb = await Customer.findByIdAndDelete(id);
    if (!recordInDb.$isDeleted) throw new Error("err");
  } catch (err) {
    throw new Exceptions.NotFound("Record is not found you are requested ..");
  }
}

module.exports = { store, getSingle, update, destroy };
