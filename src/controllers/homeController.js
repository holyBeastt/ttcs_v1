const getHomePage = (req, res) => {
  res.send("What do you want");
};

const getAbc = (req, res) => {
  res.send("Hello World djflsdjgklajg");
};

const getImg = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomePage, getAbc, getImg };
