const express = require('express');
const router = express.Router();

const getMenu = require('./handlers/getMenu')
const getAllergens = require('./handlers/getAllergens')
const getDishInfo = require('./handlers/getDishInfo')
const getRestaurants = require('./handlers/getRestaurants')

router.get('/menu/:id', getMenu )
router.get('/allergens/:id', getAllergens )
router.get('/dish/:id', getDishInfo )
router.get('/restaurants', getRestaurants )

module.exports = router;