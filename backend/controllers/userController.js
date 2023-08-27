const User = require("../Models/userModel");

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
        status:'success',
        user
    })
  } catch (err) {
    res.status(400).json({
        status:'failed',
        message:err.message
    })
  }
};
