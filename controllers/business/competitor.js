const competitorService = require("../../services/business/competitor");

async function fetchSingle(req, res) {
  const competitor = await competitorService.getSingle(req.user._id);
  res.send({ competitor });
}

async function store(req, res) {
  const competitor = await competitorService.store(req.body, req.user._id);
  res.send({ competitor });
}

module.exports = { store, fetchSingle };
