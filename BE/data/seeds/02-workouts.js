const db = require('../dbConfig')


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return db('workouts').truncate()
    .then(()=>{
      return db('workouts').insert([
        {
          user_id:1,
          date:'2022-11-15',        
          streak:0
        },
        {
          user_id:1,
          date:'2022-11-16',       
          streak:1
        },
        {
          user_id:2,
          date:'2022-11-17',
          streak:2
        },
        {
          user_id:2,
          date:'2022-11-20',
          streak:0
        },
      ]);
    })
};