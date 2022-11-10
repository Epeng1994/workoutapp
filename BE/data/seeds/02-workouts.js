const db = require('../dbConfig')


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return db('workouts').truncate()
    .then(()=>{
      return db('workouts').insert([
        {
          workout_Date:'01/01/2022'
        }
      ]);
    })
};