async function store(req, res) {
  res.send(req.body);
  // res.send("store intro record");
}

module.exports = {
  store,
};
