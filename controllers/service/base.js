const baseService = require("../../services/service/base");

class BaseController {
  model = null;
  serviceEnroll = "web_development";
  payload = "record";

  constructor(model, serviceEnroll = "web_development", payload = "record") {
    this.model = model;
    this.serviceEnroll = serviceEnroll;
    this.payload = payload;
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
    const record = await baseService.store(
      this.model,
      req.body,
      req.user._id,
      this.serviceEnroll
    );
    res.send({ [this.payload]: record });
  }

  async update(req, res) {
    const record = await baseService.update(
      this.model,
      req.body,
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
