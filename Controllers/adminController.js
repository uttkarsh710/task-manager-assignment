const Task = require("../models/task");
const User = require("../models/user");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
     success