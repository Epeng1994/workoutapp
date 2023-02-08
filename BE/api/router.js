const express = require('express')
const router = express.Router()
const userModel = require('./model.js')
const middleware = require('./middleware');

router.use(express.json())

router.get('/users', (req,res,next)=>{
    userModel.getAllUsers()
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })
})


router.get('/users/:id',(req,res,next)=>{
    const id = req.params
    userModel.getUserById(id)
        .then(results=>{
            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
})

router.post('/users/:id', (req,res,next)=>{
    const id = req.params

})

module.exports = router