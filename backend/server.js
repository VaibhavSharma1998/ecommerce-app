// server.js is responsible for starting your Express server.

// It imports the app instance from app.js and listens on a specific port.

// It also often handles environment configurations and connections to databases.


const mongoose = require('mongoose');

const app = require('./app')
const dotenv = require('dotenv')

dotenv.config({path:'backend/config/config.env'})

const DB_URI = process.env.DATABASE.replace('<password>',process.env.PASSWORD_DATABASE)

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
       
      })
  .then(() => {
    console.log('Connected to MongoDB Atlas 😎 😂');
    
  })
  .catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error.message);
  });
// console.log(DB_URI)
// LISTEN

app.listen(process.env.PORT,()=>{
    console.log(`Listening on Port ${process.env.PORT}`)
    
})