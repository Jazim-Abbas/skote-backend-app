const uspService = require("../../services/business/usp");

async function store(req, res) {
  const record = await uspService.store(req.body, req.user._id);
  res.send({ usp: record });
}

module.exports = {
  store,
};
