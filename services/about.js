const About = require("../db/about");

async function save(about) {
  const record = new About({
    user: user_id,
    ...about,
  });
}

module.exports = {
  save,
};
