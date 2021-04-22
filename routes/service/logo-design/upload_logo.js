const express = require("express");
const { LD_UploadLogo } = require("../../../db/service");
const BaseController = require("../../../controllers/service/base");
const validation = require("../../../utils/validations/logo-design/upload_logo");
const uploads = require("../../../utils/upload-image");
const isLogoExist = require("../../../middlewares/is_logo_exist");

const schemaValidate = require("../../../utils/validations/validate");
const multiUpload = require("../../../utils/upload-logos/likes");

const router = express.Router();
const baseController = new BaseController(
  LD_UploadLogo,
  validation.uploadLogoSchema,
  "logo_creation",
  "payload"
);

router.get("/", (req, res) => {
  return baseController.fetchSingle(req, res);
});
router.post(
  "/",
  multiUpload.fields([
    { name: "logo_likes", maxCount: 3 },
    { name: "logo_dislikes", maxCount: 3 },
  ]),
  async (req, res) => {
    const files = req.files;
    const logo_likes = [];
    const logo_dislikes = [];

    files.logo_likes.forEach((file) => {
      logo_likes.push(file.path);
    });

    files.logo_dislikes.forEach((file) => {
      logo_dislikes.push(file.path);
    });

    // console.log("logo likes", logo_likes);
    // console.log("logo dislikes", logo_dislikes);

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

    console.log("all files", all_files);

    res.send({ message: "done" });

    // actual implementation
    // req.body.logo = req.file.path;
    // return baseController.store(req, res);
  }
);
router.patch("/:id", uploads.single("logo"), (req, res) => {
  req.body.logo = req.file ? req.file.path : req.body.logo;
  return baseController.update(req, res);
});
router.delete("/:id", (req, res) => {
  return baseController.destroy(req, res);
});

module.exports = router;

function appendFieldsData(req, fields) {
  let _fields = {};

  if (fields.likes_url) {
    _fields.is_logo_like_img = false;
    _fields.logo_likes = fields.likes_url;
  } else {
    _fields.is_logo_like_img = true;
  }

  if (fields.dislikes_url) {
    _fields.is_logo_dislike_img = false;
    _fields.logo_dislikes = fields.dislikes_url;
  } else {
    _fields.is_logo_dislike_img = true;
  }

  return _fields;
}

// uploads.single("logo"), isLogoExist,
