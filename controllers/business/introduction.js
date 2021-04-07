const introductionService = require("../../services/business/introduction");

async function store(req, res) {
  const introRecord = await introductionService.store(req.body);
  res.send({ introduction: introRecord });
}

module.exports = {
  store,
};
