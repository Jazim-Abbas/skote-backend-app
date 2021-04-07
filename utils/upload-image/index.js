const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const config = require("config");

const destination = `uploads`;

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/users");
  },
  filename: (req, file, cb) => {
    console.log("file name run");
    const id = uuidv4();
    cb(null, `image`);
  },
});

const uploads = multer({
  storage: multerStorage,
});

exports.uploadPhoto = uploads.single("photo");
// module.exports = uploadImgConfig;
