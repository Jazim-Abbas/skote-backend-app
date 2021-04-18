const mongoose = require("mongoose");
const config = require("config");

module.exports = async () => {
  const dbConnString = config.get("db.mongo_url");
  try {
    const connection = await mongoose.connect(dbConnString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Database is connected ...");
    return connection;
  } catch (err) {
    console.log("Some errors while connecting to database ...");
    process.exit(1);
  }
};
