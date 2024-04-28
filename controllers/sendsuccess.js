const path = require("path");
exports.sendSuccess = (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/success.html"));
};