const connection = require("../config/database");

const getHomePage = (req, res) => {
  res.send("What do you want");
};

const connect = require("../config/database");
let a = [];

const getAbc = (req, res) => {
  connect.query("SELECT * FROM `bomon`", function (err, results, fields) {
    console.log("result = ", results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
    // Chuyển đổi kết quả thành JSON
    a = results;
    res.send(JSON.stringify(a));
  });
};

module.exports = { getHomePage, getAbc };
