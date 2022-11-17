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

router.get('/workouts', (req,res,next)=>{
    userModel.getAllWorkouts()
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })
})

router.post('/workouts', middleware.uniqueDate,(req,res,next)=>{
    const result = req.result
    res.json(result)
})

router.get('/users/:id',(req,res,next)=>{
    const id = req.params
    userModel.getUserByID(id)
        .then(results=>{
            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
})

router.post('/users/:id',(req,res,next)=>{
    const id = req.params
    userModel.addWorkoutById(req.body)
        .then(result=>{
            res.json('Workout logged')
        })
        .catch(error=>{
            console.log(error)
        })
})

module.exports = router