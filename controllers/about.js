const aboutService = require("../services/about");

async function store(req, res) {
  const about = await aboutService.save(req.body, req.user._id);
  res.send({ about });
}

module.exports = {
  store,
};
