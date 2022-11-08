const express = require('express')
const server = express()
const router = require('./router.js')

server.use('/data', router)


//general global error middleware
server.use((error,req,res,next)=>{
    res.status(error.status || 500).json({message: error.message || "Server error"})
})

module.exports = server