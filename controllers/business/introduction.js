const introductionService = require("../../services/business/introduction");
const validation = require("../../utils/validations/introduction");
const schemaValidate = require("../../utils/validations/validate");

async function fetchSingle(req, res) {
  const introRecord = await introductionService.getSingle(req.user._id);
  res.send({ introduction: introRecord });
}

async function store(req, res) {
  const fields = await schemaValidate(validation.introSchema, req.body);
  const introRecord = await introductionService.store(fields, req.user._id);
  res.send({ introduction: introRecord });
}

async function update(req, res) {
  const introRecord = await introductionService.update(req.body, req.params.id);
  res.send({ introduction: introRecord });
}

async function destroy(req, res) {
  await introductionService.destroy(req.params.id);
  res.send({ message: "Successfully deleted the record .." });
}

module.exports = {
  store,
  fetchSingle,
  update,
  destroy,
};
