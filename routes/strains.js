const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all users record */
router.get('/', (req, res, next) => {
  knex('strains').then(data => res.status(200).json(data)).catch(err => next(err))
})
//
/* GET single users record */
router.get('/:id', (req, res, next) => {
  knex('strains').where('id', req.params.id).then(([data]) => res.status(200).json(data)).catch(err => next(err))
})

module.exports = router
