const path = require("path");

const homePageControllers = (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/index.html"));
};

module.exports = homePageControllers;