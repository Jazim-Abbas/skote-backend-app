const validation = require("../../utils/validations/engage");
const schemaValidate = require("../../utils/validations/validate");
const engageService = require("../../services/service/engage");

async function fetchSingle(req, res) {
  const checkList = await engageService.getSingle(req);
  res.send({ checkList });
}

async function store(req, res) {
  const fields = await schemaValidate(validation.engageSchema, req.body);
  const checkList = await engageService.store(fields, req.user._id);
  res.send({ checkList });
}

async function update(req, res) {
  const fields = await schemaValidate(validation.engageSchema, req.body);
  const checkList = await engageService.update(req.body, req.params.id);
  res.send({ checkList });
}

async function destroy(req, res) {
  await engageService.destroy(req.params.id);
  res.send({ message: "Successfully deleted the checklist ..." });
}

module.exports = { store, fetchSingle, update, destroy };
