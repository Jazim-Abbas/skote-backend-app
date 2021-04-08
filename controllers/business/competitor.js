const competitorService = require("../../services/business/competitor");

async function fetchSingle(req, res) {
  const competitor = await competitorService.getSingle(req.user._id);
  res.send({ competitor });
}

async function store(req, res) {
  const competitor = await competitorService.store(req.body, req.user._id);
  res.send({ competitor });
}

async function update(req, res) {
  const competitor = await competitorService.update(req.body, req.params.id);
  res.send({ competitor });
}

async function destroy(req, res) {
  await competitorService.destroy(req.params.id);
  res.send({ message: "Successfully deleted the record" });
}

module.exports = { store, fetchSingle, update, destroy };
