const Exception = require("../custom_exceptions");

module.exports = async function (schema, fields, abortEarly = false) {
  try {
    return await schema.validate(fields, { abortEarly });
  } catch (ex) {
    throw new Exception.ValidationError(
      "Please enter valid information",
      ex.errors
    );
  }
};
