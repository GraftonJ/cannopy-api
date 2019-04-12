exports.up = function(knex, Promise) {
  return knex.schema.createTable('batches_orders', function(table){
    //Table Column definitions
    table.increments()
    table.integer('batches_id').notNullable('')
    table.foreign('batches_id').references('batches.id').onDelete('CASCADE')
    table.integer('orders_id').notNullable('')
    table.foreign('orders_id').references('orders.id').onDelete('CASCADE')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('batches_orders')
};
