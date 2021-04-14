const baseService = require("../../services/service/base");

async function fetchSingle(req, res) {
  const objective = await baseService.getSingle(req.user._id);
  res.send({ objective });
}

async function store(req, res) {
  const objective = await baseService.store(req.body, req.user._id);
  res.send({ objective });
}

async function update(req, res) {
  console.log(req.params.id);
  const objective = await baseService.update(
    req.body,
    req.params.id,
    req.user._id
  );
  res.send({ objective });
}

async function destroy(req, res) {
  await baseService.destroy(req.params.id, req.user._id);
  res.send({ message: "Successfully deleted the record .." });
}

module.exports = { store, fetchSingle, update, destroy };
