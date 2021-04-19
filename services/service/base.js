const { WG_Objective, Engage } = require("../../db/service");
const Exceptions = require("../../utils/custom_exceptions");
const baseService = require("../base");

async function checkServiceFoundInCheckList(
  user_id,
  service = "web_development"
) {
  const checkList = await Engage.findOne({ user: user_id, services: service });

  if (!checkList)
    throw new Exceptions.BadRequset(
      `You are not enrolled the service ${service}`
    );

  return checkList;
}

async function getSingle(model, req, service) {
  await checkServiceFoundInCheckList(req.user._id, service);
  return await baseService.getSingle(model, req.user, req.query.id);
}

async function store(model, detail, user_id, service) {
  await checkServiceFoundInCheckList(user_id, service);
  const record = new model({
    user: user_id,
    ...detail,
  });

  try {
    return await record.save();
  } catch (err) {
    throw new Exceptions.BadRequset("You already created the record");
  }
}

async function update(model, detail, id, user_id, service) {
  await checkServiceFoundInCheckList(user_id, service);
  const updatedRecord = await model
    .findByIdAndUpdate(id, { $set: { ...detail } }, { new: true })
    .select("-user");

  if (!updatedRecord)
    throw new Exceptions.NotFound("Record is not found you are requested ..");

  return updatedRecord;
}

async function destroy(model, id, user_id, service) {
  await checkServiceFoundInCheckList(user_id, service);
  try {
    const recordInDb = await model.findByIdAndDelete(id);
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
