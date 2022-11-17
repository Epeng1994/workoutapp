const db = require('../data/dbConfig')

async function getAllUsers(){
    return await db('users')
}

async function getAllWorkouts(){
    return await db('workouts')
}

async function getUserByID(id){
    return await db('users').where({user_id: id})
}

async function addWorkoutById(workout){
    return await db('workouts').insert(workout)
}

module.exports = {
    getAllUsers,
    getAllWorkouts,
    getUserByID,
    addWorkoutById
}