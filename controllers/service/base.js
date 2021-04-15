const baseService = require("../../services/service/base");
const schemaValidate = require("../../utils/validations/validate");

class BaseController {
  model = null;
  serviceEnroll = "web_development";
  payload = "record";
  validation = null;

  constructor(
    model,
    validation,
    serviceEnroll = "web_development",
    payload = "record"
  ) {
    this.model = model;
    this.serviceEnroll = serviceEnroll;
    this.payload = payload;
    this.validation = validation;
  }

  async fetchSingle(req, res) {
    const record = await baseService.getSingle(
      this.model,
      req.user._id,
      this.serviceEnroll
    );

    res.send({ [this.payload]: record });
  }

  async store(req, res) {
    const fields = await schemaValidate(this.validation, req.body);
    const record = await baseService.store(
      this.model,
      fields,
      req.user._id,
      this.serviceEnroll
    );
    res.send({ [this.payload]: record });
  }

  async update(req, res) {
    const fields = await schemaValidate(this.validation, req.body);
    const record = await baseService.update(
      this.model,
      fields,
      req.params.id,
      req.user._id,
      this.serviceEnroll
    );
    res.send({ [this.payload]: record });
  }

  async destroy(req, res) {
    await baseService.destroy(
      this.model,
      req.params.id,
      req.user._id,
      this.serviceEnroll
    );
    res.send({ message: "Successfully deleted the record .." });
  }
}

module.exports = BaseController;
