const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/skote-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected ...");
  } catch (err) {
    console.log("Some errors while connecting to database ...");
    process.exit(1);
  }
};
