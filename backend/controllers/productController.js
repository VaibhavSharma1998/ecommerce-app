const Product = require('../Models/productModel')

// create the product

exports.createProducts = async(req,res)=>{
  try{
    const product = await Product.create(req.body)
    res.status(201).json({
      status:'success',
      product
    })
  }catch(err){
    res.status(400).json({
      status:'failed',
      message:err
    })
  }
}


exports.getAllProducts = (req,res)=>{
  res.status(200).json({
    status:'success',
    message:'I dont know why it is not working',
    update:'Aa gya bhai aub mahnat karni hai aaj and try to made api today'
  })
}

