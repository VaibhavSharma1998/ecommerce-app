const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
    trim: true,
    maxLength: [30, "Name should not exceed 30 letters"],
    minLength: [3, "Name should be more than 2 letters"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
    validate: [validator.isEmail, "please Enter a valid email"],
    unique: [true,"Email you have entered already exist in database please entered a unique email"]
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
    minLength: [8, "password should contain minimum of 8 characters"],
    trim: true,
    select:false,
  },
  avatar: {
    public_id: {
      type: String,
      // required: [true],
    },
    url: {
      type: String,
      // required: [true],
    },
  },
  role: {
    type: String,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// hashed password using bcrypt

userSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    next()
  }
  this.password = await  bcrypt.hash(this.password,10)
})


//  jwt 
userSchema.methods.getJWTToken = function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRETKEY,{
    expiresIn:process.env.JWT_EXPIRE,
  })
}


module.exports = mongoose.model("User", userSchema);
