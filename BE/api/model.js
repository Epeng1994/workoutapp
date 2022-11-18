const db = require('../data/dbConfig')

async function getAllUsers(){
    return await db('users')
}

async function getUserById(id){
    return await db('users').where("user_id",id)
}


module.exports = {
    getAllUsers,
    getUserById,
}