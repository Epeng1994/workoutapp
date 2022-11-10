const db = require('../dbConfig')


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return db('workouts').truncate()
    .then(()=>{
      return db('workouts').insert([
        {
          user_id:1,
          workout_Date:'01/01/2022',
          completed:true          
        },
        {
          user_id:1,
          workout_Date:'01/02/2022',
          completed:true          
        },
        {
          user_id:2,
          workout_Date:'01/03/2022',
          completed:true          
        },
      ]);
    })
};