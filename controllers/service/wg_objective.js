const baseService = require("../../services/service/base");
const { WG_Objective } = require("../../db/service");

async function fetchSingle(req, res) {
  const objective = await baseService.getSingle(
    WG_Objective,
    req.user._id,
    "web_development"
  );
  res.send({ objective });
}

async function store(req, res) {
  const objective = await baseService.store(
    WG_Objective,
    req.body,
    req.user._id,
    "web_development"
  );
  res.send({ objective });
}

async function update(req, res) {
  const objective = await baseService.update(
    WG_Objective,
    req.body,
    req.params.id,
    req.user._id,
    "web_development"
  );
  res.send({ objective });
}

async function destroy(req, res) {
  await baseService.destroy(
    WG_Objective,
    req.params.id,
    req.user._id,
    "web_development"
  );
  res.send({ message: "Successfully deleted the record .." });
}

module.exports = { store, fetchSingle, update, destroy };
