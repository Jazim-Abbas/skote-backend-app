const uspService = require("../../services/business/usp");
const validation = require("../../utils/validations/usp");
const schemaValidate = require("../../utils/validations/validate");

async function fetchSingle(req, res) {
  const record = await uspService.getSingle(req);
  res.send({ usp: record });
}

async function store(req, res) {
  const fields = await schemaValidate(validation.uspSchema, req.body);
  const record = await uspService.store(fields, req.user._id);
  res.send({ usp: record });
}

async function update(req, res) {
  const fields = await schemaValidate(validation.uspSchema, req.body);
  const record = await uspService.update(req.body, req.params.id);
  res.send({ usp: record });
}

async function destroy(req, res) {
  await uspService.destroy(req.params.id);
  res.send({ message: "Successfully deleted the record  .." });
}

module.exports = {
  store,
  fetchSingle,
  update,
  destroy,
};
