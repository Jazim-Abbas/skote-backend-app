const fs = require("fs/promises");

module.exports = async function (req, res, next) {
  const fields = JSON.parse(req.body.prev);
  const allFiles = [];

  allFiles.push(fields.logo);
  fields.logo_likes.forEach((imgPath) => {
    allFiles.push(imgPath);
  });
  fields.logo_dislikes.forEach((imgPath) => {
    allFiles.push(imgPath);
  });

  for (let i = 0; i < allFiles.length; i++) {
    try {
      await fs.unlink(allFiles[i]);
    } catch (_) {}
  }

  next();
};
