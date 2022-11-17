const db = require('../dbConfig')


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return db('workouts').truncate()
    .then(()=>{
      return db('workouts').insert([
        {
          user_id:1,
          date:'2022-01-29',        
        },
        {
          user_id:1,
          date:'2022-01-30',       
        },
        {
          user_id:2,
          date:'2022-02-01',
        },
      ]);
    })
};