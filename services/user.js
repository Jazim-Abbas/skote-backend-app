const User = require("../db/user");

async function getAllUsersWithoutAdmin() {
  return await User.find({ is_admin: false }).select("-password");
}

module.exports = {
  getAllUsersWithoutAdmin,
};
