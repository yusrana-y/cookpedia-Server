require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./routes/router')

require('./config/connection')

const cpServer = express()

cpServer.use(cors())
cpServer.use(express.json())
cpServer.use(router)


const PORT = 3000 || process.env.PORT

cpServer.listen(PORT,()=>{
    console.log(`cookpedia Server running succesfully at ${PORT}`);
})

cpServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>Cookpedia server started</h1>`)
})

