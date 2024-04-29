const User = require("../models/User.js");
exports.validateUser = async (req, res) => {
  const { fullName, email, phone, password, cpwd  } = req.body;
  console.log(fullName, email, phone, password,);
  // Check for an existing user with the same email
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.redirect("error");
  }
  // Check if passwords match
  if (password !== cpwd) {
    return res.redirect("error");
  }
  // Check if user was successfully created
  const user = await User.create(req.body);
  if (!user) {
    return res.redirect("error");
  }
  return res.redirect("success");
};