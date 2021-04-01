const express = require("express");
require("express-async-errors");

const routes = require("./routes")
const exceptionHandling = require("./middlewares/exception_handling");

const app = express();

app.use("/api", routes);
app.use(exceptionHandling);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App is listening on the port ${PORT} ...`));
