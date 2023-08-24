const Product = require('../Models/productModel')

// create the product --admin(post)

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
// get all products (get)

exports.getAllProducts = async(req,res)=>{
  try{
    const products = await Product.find()
    res.status(200).json({
      status:'success',
      result:products.length,
      products
    })  
  }catch(err){
    res.status(200).json({
      status:'failed',
      message:err
    })
  }
}

// update the product --admin(put)
  exports.updateProduct = async(req,res)=>{
    try{
      const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.status(200).json({
        status:'Sucees',
        product
      })
    }catch(err){
      res.status(400).json({
        status:'Failed',
        message:err
      })
    }
  }

// delete the product --Admin(delete)
exports.deleteProduct = async(req,res)=>{
  try{
    const product = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status:'Sucess',
      
      message:'id is suceesfully delete😜'
    })
  }catch(err){
    res.status(400).json({
      status:'Failed',
      message:err
    })
  }
}


// get only one product 

exports.getOneProduct = async(req,res)=>{
  try{
    const product = await Product.findById(req.params.id)
    res.status(200).json({
      status:'Sucess',
      product
    })
  }catch(err){
    res.status(400).json({
      status:'Failed',
      message:err
    })
  }
}