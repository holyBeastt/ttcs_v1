const express = require("express");
const path = require("path");
require("dotenv").config();
//console.log("> check env: ", process.env);

// connect to database
const mysql = require("mysql2");

// config engine template
const configViewEngine = require("./config/viewEngine");

// const webRoutes = require("./routes/web");
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

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306, // default
  database: "23_9",
});

// simple query
connection.query("SELECT * FROM `bomon`", function (err, results, fields) {
  console.log("result = ", results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});
