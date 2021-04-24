const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs/promises");
const Exceptions = require("../custom_exceptions");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const filename = uuidv4() + "-" + file.originalname;
    cb(null, filename);
  },
});

const fileFilter = async (req, file, cb) => {
  return cb(null, true);

  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    try {
      await fs.access("uploads/" + file.originalname);
      cb(null, false);
    } catch (err) {
      cb(null, true);
    }
  } else {
    cb(
      new Exceptions.ValidationError(
        file.mimetype + " is not supported in the field " + file.fieldname
      ),
      false
    );
  }
};

const uploads = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = uploads;
