const express = require("express");
require("express-async-errors");

const authRoutes = require("./routes/auth");
const exceptionHandling = require("./middlewares/exception_handling");

const app = express();

app.use("/auth", authRoutes);
app.use(exceptionHandling);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App is listening on the port ${PORT}`));
