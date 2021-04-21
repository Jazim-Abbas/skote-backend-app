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
router.post("/", multiUpload.array("likes_logo", 3), async (req, res) => {
  const fields = await schemaValidate(validation.uploadLogoSchema, req.body);

  const _fields = appendFieldsData(req, fields);

  res.send({ fields: _fields });

  // actual implementation
  // req.body.logo = req.file.path;
  // return baseController.store(req, res);
});
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
