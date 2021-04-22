const Exception = require("../utils/custom_exceptions");
const fs = require("fs/promises");

module.exports = async function (err, req, res, next) {
  let statusCode = 500;
  let message = "Server error";
  let name = "SERVER_ERROR";
  let errors = [];



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

  const _files = Object.keys(files);
  console.log(_files);

  for (let key = 0; key < files.length; key++) {
    console.log(files[key]);
    if (Array.isArray(files[key])) {
      for (let i = 0; i < files[key].length; i++) {
        console.log("path", files[key][i].path);
        try {
          await fs.unlink(files[key][i].path);
        } catch (ex) {
          console.log("inside remove file some error");
        }
      }
    }
  }
}
