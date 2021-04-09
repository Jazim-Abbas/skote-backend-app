const validation = require("../../utils/validations/customer");
const schemaValidate = require("../../utils/validations/validate");
const customerService = require("../../services/business/customer");

async function fetchSingle(req, res) {
  const customer = await customerService.getSingle(req.user._id);
  res.send({ customer });
}

async function store(req, res) {
  const fields = await schemaValidate(validation.customerSchema, req.body);
  const customer = await customerService.store(fields, req.user._id);
  res.send({ customer });
}

async function update(req, res) {
  const fields = await schemaValidate(validation.customerSchema, req.body);
  const customer = await customerService.update(fields, req.params.id);
  res.send({ customer });
}

async function destroy(req, res) {
  await customerService.destroy(req.params.id);
  res.send({ message: "Successfully deleted the record ..." });
}

module.exports = { store, fetchSingle, update, destroy };
