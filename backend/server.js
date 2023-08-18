const app = require('./app')
const dotenv = require('dotenv')

dotenv.config({path:'backend/config/config.env'})



// LISTEN

app.listen(process.env.PORT,()=>{
    console.log(`Listening on Port ${process.env.PORT}`)
})