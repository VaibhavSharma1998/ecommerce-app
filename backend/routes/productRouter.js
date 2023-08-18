const express = require('express');
const productController = require('../controllers/productController.js')

const router = express.Router()

router.route("/products").get(productController.getAllProducts)

module.exports = router