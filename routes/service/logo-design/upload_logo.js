const express = require("express");
const { LD_UploadLogo } = require("../../../db/service");
const BaseController = require("../../../controllers/service/base");
const validation = require("../../../utils/validations/logo-design/upload_logo");
const uploads = require("../../../utils/upload-image");
const isLogoExist = require("../../../middlewares/is_logo_exist");

const schemaValidate = require("../../../utils/validations/validate");
const multiUpload = require("../../../utils/upload-logos/likes");
const baseService = require("../../../services/service/base");
const validateUploadLogo = require("../../../middlewares/upload-files/validate_upload_logo");
const validateUploadLogoForUpdate = require("../../../middlewares/upload-files/validate_upload_logo_for_update");

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
    { name: "logo", maxCount: 1 },
  ]),
  validateUploadLogo,
  async (req, res) => {
    const fields = mapFilePathToData(req);

    const record = await baseService.store(
      LD_UploadLogo,
      fields,
      req.user._id,
      "logo_creation"
    );

    res.send({ record });
  }
);
router.patch(
  "/:id",
  multiUpload.fields([
    { name: "logo_likes", maxCount: 3 },
    { name: "logo_dislikes", maxCount: 3 },
    { name: "logo", maxCount: 1 },
  ]),
  validateUploadLogoForUpdate,
  async (req, res) => {
    const fields = mapFilePathToData(req);

    const record = await baseService.update(
      LD_UploadLogo,
      fields,
      req.params.id,
      req.user._id,
      "logo_creation"
    );

    return res.send({ record });
  }
);
router.delete("/:id", (req, res) => {
  return baseController.destroy(req, res);
});

module.exports = router;

function mapFilePathToData(req) {
  const files = req.files;
  const fields = {
    logo: "",
    logo_likes: [],
    logo_dislikes: [],
  };

  fields.logo = files.logo[0].path;

  files.logo_likes.forEach((file) => {
    fields.logo_likes.push(file.path);
  });

  files.logo_dislikes.forEach((file) => {
    fields.logo_dislikes.push(file.path);
  });

  return fields;
}
