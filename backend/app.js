// app.js is the entry point of your Express application.
// It sets up middleware, configuration, routes, and the server.
// It imports the server.js module.

// app.js sets up Express, middleware, and global configurations.
// It imports the routes from the routes folder.

const express = require("express");
const cookieParser = require("cookie-parser"); 
const cors = require('cors');

const app = express();

// Use cors middleware before your route handlers
app.use(cors());

// convert the incoming JSON data into a JavaScript object

app.use(express.json())



// Use the cookie-parser middleware
app.use(cookieParser());

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