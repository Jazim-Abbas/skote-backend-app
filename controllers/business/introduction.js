const introductionService = require("../../services/business/introduction");

async function fetchSingle(req, res) {
  console.log(req.user._id);
  const introRecord = await introductionService.getSingle(req.user._id);
  res.send({ introduction: introRecord });
}

async function store(req, res) {
  const introRecord = await introductionService.store(req.body, req.user._id);
  res.send({ introduction: introRecord });
}

module.exports = {
  store,
  fetchSingle,
};
