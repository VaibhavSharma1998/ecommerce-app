// app.js is the entry point of your Express application.
// It sets up middleware, configuration, routes, and the server.
// It imports the server.js module.

// app.js sets up Express, middleware, and global configurations.
// It imports the routes from the routes folder.

const express = require("express");

const app = express();

// convert the incoming JSON data into a JavaScript object

app.use(express.json())

const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRoute")

// app.use((req,res,next)=>{
//     console.log('middleware')
//     next()
// })

// This line tells Express to use the product router for requests that start with the path /api/v1.

// When a request comes in with a URL that starts with /api/v1, Express will pass the request to the product router defined in the productRouter module.
app.use("/api/v1", productRouter);

app.use('/api/v1',userRouter)

module.exports = app;


// what is middlewar?

// Answer : Middleware functions are functions that can intercept(Come in between) and process incoming HTTP requests and responses