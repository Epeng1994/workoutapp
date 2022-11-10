const db = require('../dbConfig')



exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return db('users').truncate()
    .then(()=>{
      return db('users').insert([
        {
          username:'Eric',
          password:'111'
        },
        {
          username:'Joe',
          password:'222'
        },
        {
          username:'Lisa',
          password:'333'
        },
      ]);
    })
};
