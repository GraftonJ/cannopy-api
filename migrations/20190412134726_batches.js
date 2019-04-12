exports.up = function(knex, Promise) {
  return knex.schema.createTable('batches', function(table){
    //Table Column definitions
    table.increments()
    table.integer('strains_id').notNullable('')
    table.foreign('strains_id').references('strains.id').onDelete('CASCADE')
    table.string('name', 255).notNullable().defaultTo('')
    table.string('type', 255).notNullable().defaultTo('')
    table.string('size', 255).notNullable().defaultTo('')
    table.string('quantity', 255).notNullable().defaultTo('')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('batches')
};
