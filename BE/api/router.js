const express = require('express')
const router = express.Router()
const userModel = require('./model.js')



router.use(express.json())

router.get('/users', (req,res)=>{
    userModel.getAllUsers()
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })
})

router.get('/workouts', (req,res)=>{
    userModel.getAllWorkouts()
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })
})

router.get('/users/:id',(req,res)=>{
    const id = req.params
    userModel.getUserByID(id)
        .then(results=>{
            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
})


module.exports = router