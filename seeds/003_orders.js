exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { id: 1, batches_id: 1, city: 'Denver', name: 'The Joint'},
        { id: 2, batches_id: 1, city: 'Denver', name: 'Lightshade'},
        { id: 3, batches_id: 1, city: 'Denver', name: 'Altitude East Colfax'},
        { id: 4, batches_id: 2, city: 'Boulder', name: 'The Joint Boulder'},
        { id: 5, batches_id: 2, city: 'Boulder', name: 'Lightshade Boulder'},
        { id: 6, batches_id: 3, city: 'Boulder', name: 'Altitude Boulder'},
        { id: 7, batches_id: 3, city: 'Fort Collins', name: 'The Joint Fort Collins'},
        { id: 8, batches_id: 3, city: 'Fort Collins', name: 'Lightshade Fort Collins'},
        { id: 9, batches_id: 3, city: 'Fort Collins', name: 'Altitude Fort Collins'},
      ])
    })
    .then(function () {
      //Moves id column (PK) auto-incremented to correct value after inserts
      return knex.raw(`SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders))`)
    })
}
