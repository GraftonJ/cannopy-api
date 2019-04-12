
exports.up = function(knex, Promise) {
  return knex.schema.createTable('strains', function(table){
    //Table Column definitions
    table.increments()
    table.string('name', 255).notNullable().defaultTo('')
    table.string('type', 255).notNullable().defaultTo('')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('strains')
};
