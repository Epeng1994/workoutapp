const db = require('../data/dbConfig')

async function getAllUsers(){
    return await db('users')
}

async function getUserById(id){
    return await db('users').where("user_id",id)
}

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
    getAllUsers,
    getAllWorkouts,
    getUserById,
    addWorkoutById,
    findWorkoutByDate,
    getWorkoutsById
}