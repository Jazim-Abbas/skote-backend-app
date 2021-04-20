const express = require("express");
const cors = require("cors");
require("express-async-errors");
const bodyParser = require("body-parser");

const routes = require("./routes");
require("./utils/check_env_vars")();
const dbConnect = require("./db/connect");
const exceptionHandling = require("./middlewares/exception_handling");

dbConnect();
const app = express();

app.use("/uploads", express.static("uploads"));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);
app.use(exceptionHandling);

module.exports = app;
