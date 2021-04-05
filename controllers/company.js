const companyService = require("../services/company");

async function getSingle(req, res) {
  const company = await companyService.getSingle(req.user._id);
  res.send({ company });
}

async function save(req, res) {
  const company = await companyService.save(req.body, req.user._id);
  res.send({ company });
}

module.exports = {
  save,
  getSingle,
};
