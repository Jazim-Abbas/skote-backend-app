const Exceptions = require("../../utils/custom_exceptions");

module.exports = function (req, res, next) {
  const files = req.files;

  if (!files) {
    throwErrors("Please upload files in order to proceed ..");
  }

  if (!files.logo) {
    throwErrors("Please upload logo");
  }

  if (!files.logo_likes || files.logo_likes.length < 3) {
    throwErrors("Upload minimun 3 images for logo you likes");
  }

  if (!files.logo_dislikes || files.logo_dislikes.length < 3) {
    throwErrors("Upload minimum 3 images for logo you dislike");
  }

  next();
};

function throwErrors(err) {
  throw new Exceptions.ValidationError(err);
}
