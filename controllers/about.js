const aboutService = require("../services/about");
const validation = require("../utils/validations/about");
const schemaValidate = require("../utils/validations/validate");

async function getSingle(req, res) {
  const about = await aboutService.getSingleRecord(req.user._id);
  res.send({ about });
}

async function store(req, res) {
  const fields = await schemaValidate(validation.aboutSchema, req.body);
  const about = await aboutService.save(fields, req.user._id);
  res.send({ about });
}

async function update(req, res) {
  const fields = await schemaValidate(validation.aboutSchema, req.body);
  const about = await aboutService.update(fields, req.params.id);
  res.send({ about });
}

async function destroy(req, res) {
  await aboutService.destroy(req.params.id);
  res.send("Successfully deleted the record ..");
}

module.exports = {
  store,
  getSingle,
  update,
  destroy,
};
