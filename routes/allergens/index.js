const express = require('express');
const getAllergens = require('./handlers/getAllergens')
const addAllergens = require('./handlers/addAllergens')
const delAllergens = require('./handlers/delAllergens')

const router = express.Router();

function getRouter(db) {

	router.get('/', getAllergens.bind(null, db) )
	router.post('/', addAllergens.bind(null, db) )
	router.delete('/:id', delAllergens.bind(null, db) )

	return router;
}

module.exports = getRouter;