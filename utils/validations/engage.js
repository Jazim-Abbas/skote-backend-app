const yup = require("yup");

// this is short hand regex
// const serviceRegExp = /(^hi$|^bye$)/;

const webDev = /^web_development$/;
const paidAds = /^paid_advertising$/;
const marketing = /^social_media_marketing$/;
const logoCreation = /^logo_creation$/;
const graphics = /^graphic_designing$/;
const automation = /^productivity_and_automation$/;
const serviceRegExp = new RegExp(
  webDev.source +
    "|" +
    paidAds.source +
    "|" +
    marketing.source +
    "|" +
    logoCreation.source +
    "|" +
    graphics.source +
    "|" +
    automation.source
);

function errorMsg() {
  const services = [
    "web_development",
    "paid_advertising",
    "social_media_marketing",
    "logo_creation",
    "graphic_designing",
    "productivity_and_automation",
  ];

  let msg = "You are only allowed to add these fields: ";
  services.forEach((service) => {
    msg += service + " ";
  });

  return msg;
}

const engageSchema = yup.object().shape({
  services: yup
    .array()
    .min(1)
    .of(yup.string().matches(serviceRegExp, errorMsg).required())
    .required(),
});

module.exports = { engageSchema };
