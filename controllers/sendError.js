const path = require("path");
exports.sendError = (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/error.html"));
};