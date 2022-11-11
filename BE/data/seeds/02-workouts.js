const db = require('../dbConfig')


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return db('workouts').truncate()
    .then(()=>{
      return db('workouts').insert([
        {
          user_id:1,
          workout_Date:'20220129',
          completed:true          
        },
        {
          user_id:1,
          workout_Date:'20220130',
          completed:true          
        },
        {
          user_id:2,
          workout_Date:'20220201',
          completed:true          
        },
      ]);
    })
};