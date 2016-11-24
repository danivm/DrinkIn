const express = require('express');
const router = express.Router();

const getCategories = require('./handlers/getCategories')
const addCategories = require('./handlers/addCategories')
const delCategories = require('./handlers/delCategories')

router.get('/', getCategories)
router.post('/', addCategories)
router.delete('/:id', delCategories)

module.exports = router;