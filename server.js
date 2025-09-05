import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
// reset object
const app = express()

//configure dotenv
dotenv.config()

//rest api
app.get('/', (req, res)=>{
res.send(
    "<h1>Welcome to Ecommerce App</h1>"
)
})

// port 
const PORT = process.env.PORT || 8000


// listen 
app.listen(PORT, ()=>{
    console.log(` Server is running on ${process.env.DEV_MODE} mode on port:${PORT} `.bgMagenta.white)
})