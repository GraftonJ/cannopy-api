exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { id: 1, batches_id: 1, city: 'Denver', name: 'John Smith'},
        { id: 2, batches_id: 2, city: 'Boulder', name: 'Jane Doe'},
        { id: 3, batches_id: 3, city: 'Fort Collins', name: 'John Denver'}
      ])
    })
    .then(function () {
      //Moves id column (PK) auto-incremented to correct value after inserts
      return knex.raw(`SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders))`)
    })
}
