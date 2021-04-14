const baseService = require("../../services/service/base");

async function fetchSingle(req, res) {
  const objective = await baseService.getSingle(req.user._id);
  res.send({ objective });
}

async function store(req, res) {
  const objective = await baseService.store(req.body, req.user._id);
  res.send({ objective });
}

module.exports = { store, fetchSingle };
