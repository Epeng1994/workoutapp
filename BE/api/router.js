const express = require('express')
const router = express.Router()
const userModel = require('./model.js')



router.use(express.json())

router.get('/', (req,res)=>{
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


module.exports = router