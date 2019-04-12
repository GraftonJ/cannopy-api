const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all users record */
router.get('/', (req, res, next) => {
  knex('batches_orders').then(data => res.status(200).json(data)).catch(err => next(err))
})
//
/* Get all the batches for a particular order id */
router.get('/:id', (req, res, next) => {
  knex
    .select('batches_orders.id as join_id', 'orders.city', 'orders.id as orders_id', 'orders.name', 'batches.type', 'batches.size', 'batches.strains_id', 'batches.quantity' 'batches.id as batches_id')
    .from('batches_orders')
    .innerJoin('orders', 'orders.id', 'batches_orders.orders_id')
    .innerJoin('batches', 'batches.id', 'batches_orders.batches_id')
    .where('orders.id', req.params.id)
    .then(data => res.status(200).json(data)).catch(err => next(err))
})

module.exports = router
