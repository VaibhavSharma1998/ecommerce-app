const express = require('express')

const app = express()

app.use(express.json())

const product = require('./routes/productRouter')

// app.use((req,res,next)=>{
//     console.log('middleware')
//     next()
// })

app.use("/api/v1",product)

module.exports = app