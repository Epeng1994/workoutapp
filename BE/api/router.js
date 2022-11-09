const express = require('express')
const router = express.Router()
const userModel = require('./model.js')



router.use(express.json())

router.get('/', (req,res)=>{
    res.json('Here') 
})


module.exports = router