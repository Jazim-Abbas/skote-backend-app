const schemaValidate = require("../../utils/validations/validate");
const validation = require("../../utils/validations/target_market");
const targetMarketService = require("../../services/business/target_market");

async function fetchSingle(req, res) {
  const targetMarket = await targetMarketService.getSingle(req);
  res.send({ targetMarket });
}

async function store(req, res) {
  const fields = await schemaValidate(validation.marketSchema, req.body);
  const targetMarket = await targetMarketService.store(fields, req.user._id);
  res.send({ targetMarket });
}

async function update(req, res) {
  const fields = await schemaValidate(validation.marketSchema, req.body);
  const targetMarket = await targetMarketService.update(fields, req.params.id);
  res.send({ targetMarket });
}

async function destroy(req, res) {
  await targetMarketService.destroy(req.params.id);
  res.send({ message: "Successfully deleted the record .." });
}

module.exports = { store, fetchSingle, update, destroy };
