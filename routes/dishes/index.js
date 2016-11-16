const express = require('express');
const getDishes = require('./handlers/getDishes')
const addDishes = require('./handlers/addDishes')
const delDishes = require('./handlers/delDishes')
const getEditDish = require('./handlers/getEditDish')
const putEditDish = require('./handlers/putEditDish')

const router = express.Router();

function getRouter(db) {

	router.get('/', getDishes.bind(null, db) )
	router.post('/', addDishes.bind(null, db) )
	router.delete('/:id', delDishes.bind(null, db) )

	router.get('/edit/:id', getEditDish.bind(null, db) )
	router.put('/edit', putEditDish.bind(null, db) )
	
	return router;
}

module.exports = getRouter;