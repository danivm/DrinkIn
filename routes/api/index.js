const express = require('express');
const router = express.Router();

const getMenu = require('./handlers/getMenu')
const getAllergens = require('./handlers/getAllergens')
const getDishInfo = require('./handlers/getDishInfo')

router.get('/menu', getMenu )
router.get('/allergens', getAllergens )
router.get('/dish/:id', getDishInfo )

module.exports = router;