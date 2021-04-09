const customerService = require("../../services/business/customer");

async function fetchSingle(req, res) {
  const customer = await customerService.getSingle(req.user._id);
  res.send({ customer });
}

async function store(req, res) {
  const customer = await customerService.store(req.body, req.user._id);
  res.send({ customer });
}

module.exports = { store, fetchSingle };
