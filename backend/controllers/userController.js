const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const sendToken = require("../utils/jwtToken")

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    // const token = user.getJWTToken();
    // res.status(201).json({
    //   status: "success",
    //   token,
    // });

    sendToken(user,201,res)
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

// login User

exports.loginUser = async (req, res) => {
  const { email, password  } = req.body;

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

    // const token = user.getJWTToken();
    // res.status(200).json({
    //   status: "success",
    //   token,
    // });

    

    sendToken(user,200,res)
    
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};


// logout user

exports.logoutUser = async(req,res)=>{
  res.cookie("token",null,{
    expires: new Date(Date.now()),
    httpOnly:true,
  })

  try{
   res.status(200).json({message:'Log out suceessfully!'})
    
  }catch(err){
    res.status(400).json({message:'Token not found'})   
  }
}