const aboutService = require("../services/about");

async function getSingle(req, res) {
  const about = await aboutService.getSingleRecord(req.user._id);
  res.send({ about });
}

async function store(req, res) {
  const about = await aboutService.save(req.body, req.user._id);
  res.send({ about });
}

async function update(req, res) {
  const about = await aboutService.update(req.body, req.params.id);
  res.send({ about });
}

async function destroy(req, res) {
  await aboutService.destroy(req.params.id);
  res.send("Successfully deleted the record ..");
}

module.exports = {
  store,
  getSingle,
  update,
  destroy,
};
