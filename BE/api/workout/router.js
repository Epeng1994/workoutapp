const express = require('express')
const router = express.Router()
const model = require('./model.js');
const middleware = require('./middleware');

router.use(express.json())

router.get('/', (req,res,next)=>{
    model.getAllWorkouts()
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })
})

router.get('/:id', (req,res,next)=>{
    const id = req.params.id
    model.getWorkoutsById(id)
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })
})

router.post('/:id', middleware.uniqueDate,(req,res,next)=>{
    model.addWorkout(req.result)
        .then(result=>{
            res.json('Workout logged')
        })
        .catch(error=>{
            res.json(error)
        })
})


module.exports = router
