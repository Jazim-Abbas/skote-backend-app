const express = require("express");
const authRoutes = require("./routes/auth");

const app = express();

app.use("/auth", authRoutes);

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => console.log(`App is listening on the port ${PORT}`));
