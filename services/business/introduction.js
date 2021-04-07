const Introduction = require("../../db/introduction");
const Exceptions = require("../../utils/custom_exceptions");

async function store(detail) {
  const introRecord = new Introduction({
    ...detail,
  });

  try {
    return await introRecord.save();
  } catch (err) {
    throw new Exceptions.BadRequset("You already created the record");
  }
}

module.exports = {
  store,
};
