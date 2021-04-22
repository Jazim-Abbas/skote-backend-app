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

  if (!files) {
    return cb(
      new Exceptions.ValidationError(
        "You have to upload files in order to proceed"
      ),
      false
    );
  }

  // if (some.length < 3) {
  //   cb(
  //     new Exceptions.ValidationError(
  //       "You have to upload minium 3 images for your likes"
  //     ),
  //     false
  //   );
  // }

  const likes = req.files.logo_likes;

  console.log("likes images", likes);
  console.log("likes image length", likes.length);

  if (!likes || likes.length < 3) {
    console.log("less than 3");
    // return cb(
    //   new Exceptions.ValidationError(
    //     "You have to upload minium 3 images for your likes"
    //   ),
    //   false
    // );
  }

  return cb(null, false);

  if (fields.likes_url) {
    return cb(null, false);
  }

  console.log("inside file filter likes_url field is missing");

  return cb(null, false);

  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    try {
      await fs.access("uploads/" + file.originalname);
      cb(null, false);
    } catch (err) {
      cb(null, true);
    }
  } else {
    cb(
      new Exceptions.ValidationError(file.mimetype + " is not supported .."),
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
