// The routes folder holds route definitions.

// Each route file defines the routes and associates them with controller functions.

// These routes determine the API endpoints and HTTP methods.



const express = require('express');

const productController = require('../controllers/productController.js')


const router = express.Router()



// express.Router() is a method provided by 
// Express.js that creates a new router instance (example).


router.route("/products").get(productController.getAllProducts)

router.route("/product/new").post(productController.createProducts)

router.route("/product/:id").put(productController.updateProduct).delete(productController.deleteProduct).get(productController.getOneProduct)

module.exports = router