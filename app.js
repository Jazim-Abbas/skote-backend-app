const express = require("express");
const cors = require("cors");
require("express-async-errors");
const bodyParser = require("body-parser");

const routes = require("./routes");
const exceptionHandling = require("./middlewares/exception_handling");
const dbConnect = require("./db/connect");

dbConnect();
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);
app.use(exceptionHandling);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App is listening on the port ${PORT} ...`));
