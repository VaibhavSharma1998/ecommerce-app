const jwt = require('jsonwebtoken')
const User = require("../Models/userModel");

exports.isAuthenticatedUser = async(req,res,next)=>{
    const {token} = req.cookies
    
    if(!token){
        return res.status(401).json({message:'Please login to access this page'})
    }

    try{
        const decodedData = jwt.verify(token,process.env.JWT_SECRETKEY)
        req.user = await User.findById(decodedData._id)
        next()
    }catch(err){
        res.status(400).json({message:'Invalid token'})
    }
}