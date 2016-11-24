const express = require('express');
const router = express.Router();

const getAllergens = require('./handlers/getAllergens')
const addAllergens = require('./handlers/addAllergens')
const delAllergens = require('./handlers/delAllergens')

router.get('/', getAllergens)
router.post('/', addAllergens)
router.delete('/:id', delAllergens)

module.exports = router;