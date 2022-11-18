const db = require('../../data/dbConfig');

async function getAllWorkouts(){
    return await db('workouts')
}

async function getWorkoutsById(user_id){
    return await db('workouts').where({user_id})
}

async function addWorkoutById(workout){
    return await db('workouts').insert(workout)
}

async function findWorkoutByDate(id,date){
    return await db('workouts').where("date",date).andWhere("user_id",id)
}

module.exports = {
    getAllWorkouts,
    getWorkoutsById,
    addWorkoutById,
    findWorkoutByDate
}