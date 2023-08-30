const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = user.getJWTToken();
    res.status(201).json({
      status: "success",
      token,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

// login User

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  //checking if user has given password and email both

  if (!email || !password) {
    return res
      .status(401)
      .json({ message: "Please enter both email and password" });
  }

  try {
    // find user

    const user = await User.findOne({ email }).select("+password");

    // if user not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // check if password matches

   

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = user.getJWTToken();
    res.status(201).json({
      status: "successfully login",
      token,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
