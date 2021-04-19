const About = require("../db/about");
const Exceptions = require("../utils/custom_exceptions");
const baseService = require("./base");

async function getSingleRecord(req) {
  return await baseService.getSingle(About, req.user, req.query.id);
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
  const updatedRecord = await About.findByIdAndUpdate(
    id,
    { $set: { ...about } },
    { new: true }
  ).select("-user");

  if (!updatedRecord)
    throw new Exceptions.NotFound("Record is not found you are requested ..");

  return updatedRecord;
}

async function destroy(id) {
  try {
    const recordInDb = await About.findByIdAndDelete(id);
    if (!recordInDb.$isDeleted) throw new Error("err");
  } catch (err) {
    throw new Exceptions.NotFound("Record is not found you are requested ..");
  }
}

module.exports = {
  save,
  getSingleRecord,
  update,
  destroy,
};
