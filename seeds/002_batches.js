exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('batches').del()
    .then(function () {
      // Inserts seed entries
      return knex('batches').insert([
        { id: 1, strains_id: 1, type: 'Budder', size: '1g', quantity: 10},
        { id: 2, strains_id: 2, type: 'Live Resin', size: '0.5g', quantity: 100},
        { id: 3, strains_id: 3, type: 'Nug Cones', size: '1 each', quantity: 20}
      ])
    })
    .then(function () {
      //Moves id column (PK) auto-incremented to correct value after inserts
      return knex.raw(`SELECT setval('batches_id_seq', (SELECT MAX(id) FROM batches))`)
    })
}
