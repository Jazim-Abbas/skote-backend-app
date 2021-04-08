const competitorService = require("../../services/business/competitor");

async function store(req, res) {
  const competitor = await competitorService.store(req.body, req.user._id);
  res.send({ competitor });
}

module.exports = { store };
