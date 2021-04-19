const userService = require("../services/user");

async function fetchAllUserWithoutAdmin(req, res) {
  const users = await userService.getAllUsersWithoutAdmin();
  res.send({ users });
}

module.exports = {
  fetchAllUserWithoutAdmin,
};
