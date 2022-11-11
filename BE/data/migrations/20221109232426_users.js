/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('users',tbl=>{
    tbl.increments('user_id')
    tbl.string('username',255).notNullable().unique()
    tbl.string('password',255).notNullable()
  })
  .createTable('workouts',tbl=>{
    tbl.increments('workout_id')
    tbl.text('user_id').unsigned().notNullable().references('user_id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
    tbl.string('month').notNullable()
    tbl.string('day').notNullable()
    tbl.string('year').notNullable()
    tbl.boolean('completed').defaultTo(false)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('workouts').dropTableIfExists('users')
};
