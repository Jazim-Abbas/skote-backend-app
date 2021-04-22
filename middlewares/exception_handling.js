const Exception = require("../utils/custom_exceptions");
const fs = require("fs/promises");

module.exports = async function (err, req, res, next) {
  let statusCode = 500;
  let message = "Server error";
  let name = "SERVER_ERROR";
  let errors = [];

  await removeFileIfExists(req.files);
  console.log("ex handling", err);

  if (err instanceof Exception.HttpError) {
    if (err instanceof Exception.ValidationError) {
      errors = err.errors;
    }
    statusCode = err.statusCode;
    message = err.message;
    name = err.name;
  }

  res.status(statusCode).send({ message, name, errors });
};

async function removeFileIfExists(files) {
  if (!files) return;

  const all_files = [];

  for (let prop in files) {
    if (Array.isArray(files[prop])) {
      files[prop].forEach((file) => {
        all_files.push(file.path);
      });
    } else {
      all_files.push(files[prop].path);
    }
  }

  for (let i = 0; i < all_files.length; i++) {
    try {
      await fs.unlink(all_files[i]);
    } catch (err) {}
  }
}
