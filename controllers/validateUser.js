const User = require("../models/User.js");
exports.validateUser = async (req, res) => {
  const { fullName, email, phone, password,  } = req.body;
  console.log(fullName, email, phone, password,);
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.redirect("error");
  }
  if (password !== cpwd) {
    res.redirect("error");
  }
  const user = await User.create(req.body);
  if (!user) {
    res.redirect("error");
  }
  res.redirect("success");
};