exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('strains').del()
    .then(function () {
      // Inserts seed entries
      return knex('strains').insert([
        { id: 1, name: 'Blue Dream', type: 'Hybrid' },
        { id: 2, name: 'Purple Kush', type: 'Indica' },
        { id: 3, name: 'Sour Diesel', type: 'Sativa' }
      ])
    })
    .then(function () {
      //Moves id column (PK) auto-incremented to correct value after inserts
      return knex.raw(`SELECT setval('strains_id_seq', (SELECT MAX(id) FROM strains))`)
    })
}
