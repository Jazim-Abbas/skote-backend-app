const companyService = require("../services/company");

async function getSingle(req, res) {
  const company = await companyService.getSingle(req.user._id);
  res.send({ company });
}

async function save(req, res) {
  const company = await companyService.save(req.body, req.user._id);
  res.send({ company });
}

async function update(req, res) {
  const company = await companyService.update(req.body, req.params.id);
  res.send({ company });
}

async function destroy(req, res) {
  await companyService.destroy(req.params.id);
  res.send({ message: "Successfully deleted the company detail .." });
}

module.exports = {
  save,
  getSingle,
  update,
  destroy,
};
