const targetMarketService = require("../../services/business/target_market");

async function store(req, res) {
  const targetMarket = await targetMarketService.store(req.body, req.user._id);
  res.send({ targetMarket });
}

module.exports = { store };
