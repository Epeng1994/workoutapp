const db = require('../data/dbConfig')

async function getAllUsers(){
    return await db('users')
}

async function getAllWorkouts(){
    return await db('workouts')
}

module.exports = {
    getAllUsers,
    getAllWorkouts
}