const customerService = require("../../services/business/customer");

async function store(req, res) {
  const customer = await customerService.store(req.body, req.user._id);
  res.send({ customer });
}

module.exports = { store };
