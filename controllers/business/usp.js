const uspService = require("../../services/business/usp");

async function fetchSingle(req, res) {
  const record = await uspService.getSingle(req.user._id);
  res.send({ usp: record });
}

async function store(req, res) {
  const record = await uspService.store(req.body, req.user._id);
  res.send({ usp: record });
}

async function update(req, res) {
  const record = await uspService.update(req.body, req.params.id);
  res.send({ usp: record });
}

module.exports = {
  store,
  fetchSingle,
  update,
};
