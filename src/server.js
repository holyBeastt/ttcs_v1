const express = require("express");
const path = require("path");
require("dotenv").config();
//console.log("> check env: ", process.env);

// config engine template
const configViewEngine = require("./config/viewEngine");

const webRoutes = require("./routes/web");

const app = express();
const port = process.env.port || 8888;
const hostname = process.env.HOST_NAME;

// config engine template
configViewEngine(app);

// Khai bao route
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
