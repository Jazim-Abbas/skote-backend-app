const validation = require("../../utils/validations/engage");
const schemaValidate = require("../../utils/validations/validate");

async function store(req, res) {
  const fields = await schemaValidate(validation.engageSchema, req.body);
  res.send({ fields });
}

module.exports = { store };
