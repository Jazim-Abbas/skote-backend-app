const Introduction = require("../../db/introduction");

async function store(detail) {
  const introRecord = new Introduction({
    ...detail,
  });
}
