const { WG_Objective, Engage } = require("../../db/service");
const Exceptions = require("../../utils/custom_exceptions");

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

async function getSingle(user_id) {
  await checkServiceFoundInCheckList(user_id);
  return await WG_Objective.findOne({ user: user_id }).select("-user");
}

async function store(detail, user_id) {
  await checkServiceFoundInCheckList(user_id);
  const record = new WG_Objective({
    user: user_id,
    ...detail,
  });

  try {
    return await record.save();
  } catch (err) {
    throw new Exceptions.BadRequset("You already created the record");
  }
}

async function update(detail, id, user_id) {
  await checkServiceFoundInCheckList(user_id);
  const updatedRecord = await WG_Objective.findByIdAndUpdate(
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
    const recordInDb = await WG_Objective.findByIdAndDelete(id);
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
