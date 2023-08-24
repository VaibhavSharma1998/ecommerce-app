const express = require('express');
const productController = require('../controllers/productController.js')

const router = express.Router()

router.route("/products").get(productController.getAllProducts)

router.route("/product/new").post(productController.createProducts)

router.route("/product/:id").put(productController.updateProduct).delete(productController.deleteProduct).get(productController.getOneProduct)
module.exports = router