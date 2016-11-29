const express = require('express');
const router = express.Router();

const getMenu = require('./handlers/getMenu')
const getAllergens = require('./handlers/getAllergens')
const getDishInfo = require('./handlers/getDishInfo')
const getRestaurants = require('./handlers/getRestaurants')
const getRestaurantName = require('./handlers/getRestaurantName')

router.get('/menu/:id', getMenu )
router.get('/allergens/:id', getAllergens )
router.get('/dish/:id', getDishInfo )
router.get('/restaurants', getRestaurants )
router.get('/restaurant/:id', getRestaurantName )

module.exports = router;