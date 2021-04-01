const express = require("express");

const app = express();

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => console.log(`App is listening on the port ${PORT}`));
