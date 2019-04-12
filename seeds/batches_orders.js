exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('batches_orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('batches_orders').insert([
        { id: 1, batches_id: 1, orders_id: 1},
        { id: 2, batches_id: 2, orders_id: 1},
        { id: 3, batches_id: 3, orders_id: 1},
        { id: 4, batches_id: 3, orders_id: 2},
        { id: 5, batches_id: 3, orders_id: 2},
        { id: 6, batches_id: 1, orders_id: 2},
        { id: 7, batches_id: 2, orders_id: 1},
        { id: 8, batches_id: 3, orders_id: 2},
        { id: 9, batches_id: 3, orders_id: 2},
        { id: 10, batches_id: 3, orders_id: 3},
      ])
    })
    .then(function () {
      //Moves id column (PK) auto-incremented to correct value after inserts
      return knex.raw(`SELECT setval('batches_orders_id_seq', (SELECT MAX(id) FROM batches_orders))`)
    })
}
