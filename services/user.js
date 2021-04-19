const User = require("../db/user");

async function getAllUsersWithoutAdmin() {
  return await User.find({
    $or: [{ is_admin: false }, { is_admin: null }],
  }).select("-password");
}

module.exports = {
  getAllUsersWithoutAdmin,
};
