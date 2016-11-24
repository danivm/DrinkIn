const express = require('express')
const router = express.Router()

const getRouterCategories = require('./categories');
const getRouterDishes = require('./dishes');
const getRouterAllergens = require('./allergens');
const getRouterApi = require('./api')

app.use( '/admin/categories', getRouterCategories(db) )
app.use( '/admin/dishes', getRouterDishes(db) )
app.use( '/admin/allergens', getRouterAllergens(db) )
app.use( '/api', getRouterApi(db))