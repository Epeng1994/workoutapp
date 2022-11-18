const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()
const userRouter = require('./router.js')
const workoutRouter = require('./workout/router.js');

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/workouts', workoutRouter)


//general global error middleware
server.use((error,req,res,next)=>{
    res.status(error.status || 500).json({message: error.message || "Server error"})
})

module.exports = server