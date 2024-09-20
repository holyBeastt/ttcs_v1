const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getAbc,
  getImg,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/abc", getAbc);
router.get("/img", getImg);

module.exports = router;
