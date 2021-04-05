const companyService = require("../services/company");

async function save(req, res) {
  const company = await companyService.save(req.body, req.user._id);
  res.send({ company });
}

module.exports = {
  save,
};
