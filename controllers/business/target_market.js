const targetMarketService = require("../../services/business/target_market");

async function fetchSingle(req, res) {
  const targetMarket = await targetMarketService.getSingle(req.user._id);
  res.send({ targetMarket });
}

async function store(req, res) {
  const targetMarket = await targetMarketService.store(req.body, req.user._id);
  res.send({ targetMarket });
}

async function update(req, res) {
  const targetMarket = await targetMarketService.update(
    req.body,
    req.params.id
  );
  res.send({ targetMarket });
}

async function destroy(req, res) {
  await targetMarketService.destroy(req.params.id);
  res.send({ message: "Successfully deleted the record .." });
}

module.exports = { store, fetchSingle, update, destroy };
