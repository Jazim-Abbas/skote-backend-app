const validation = require("../../utils/validations/competitor");
const schemaValidate = require("../../utils/validations/validate");
const competitorService = require("../../services/business/competitor");

async function fetchSingle(req, res) {
  const competitor = await competitorService.getSingle(req);
  res.send({ competitor });
}

async function store(req, res) {
  const fields = await schemaValidate(validation.competitorSchema, req.body);
  const competitor = await competitorService.store(fields, req.user._id);
  res.send({ competitor });
}

async function update(req, res) {
  const fields = await schemaValidate(validation.competitorSchema, req.body);
  const competitor = await competitorService.update(fields, req.params.id);
  res.send({ competitor });
}

async function destroy(req, res) {
  await competitorService.destroy(req.params.id);
  res.send({ message: "Successfully deleted the record" });
}

module.exports = { store, fetchSingle, update, destroy };
