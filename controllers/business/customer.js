const customerService = require("../../services/business/customer");

async function fetchSingle(req, res) {
  const customer = await customerService.getSingle(req.user._id);
  res.send({ customer });
}

async function store(req, res) {
  const customer = await customerService.store(req.body, req.user._id);
  res.send({ customer });
}

async function update(req, res) {
  const customer = await customerService.update(req.body, req.params.id);
  res.send({ customer });
}

async function destroy(req, res) {
  await customerService.destroy(req.params.id);
  res.send({ message: "Successfully deleted the record ..." });
}

module.exports = { store, fetchSingle, update, destroy };
