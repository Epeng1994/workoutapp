const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', (req,res)=>{
    console.log('here')
})


module.exports = router