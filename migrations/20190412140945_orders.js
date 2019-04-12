exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function(table){
    //Table Column definitions
    table.increments()
    table.integer('batches_id').notNullable('')
    table.foreign('batches_id').references('batches.id').onDelete('CASCADE')
    table.string('city', 255).notNullable('')
    table.string('name', 255).notNullable('')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('orders')
};
