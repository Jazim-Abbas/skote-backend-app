const companyService = require("../services/company");
const validation = require("../utils/validations/company");
const schemaValidate = require("../utils/validations/validate");

async function getSingle(req, res) {
  const company = await companyService.getSingle(req.user._id);
  res.send({ company });
}

async function save(req, res) {
  const fields = await schemaValidate(validation.companySchema, req.body);
  const company = await companyService.save(fields, req.user._id);
  res.send({ company });
}

async function update(req, res) {
  const fields = await schemaValidate(validation.companySchema, req.body);
  const company = await companyService.update(fields, req.params.id);
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
