const db = require('../data/dbConfig')

async function getAllUsers(){
    return await db('users')
}

async function getAllWorkouts(){
    return await db('workouts')
}

async function getUserByID(id){
    return await db('users').where({id})
}

module.exports = {
    getAllUsers,
    getAllWorkouts,
    getUserByID
}