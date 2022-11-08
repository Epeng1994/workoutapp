const express = require('express')
const server = express()
const router = require('./router.js')

server.use('/data', router)


