const db = require('../data/dbConfig')

async function getAllUsers(){
    return await db('users')
}


module.exports = {
    getAllUsers
}