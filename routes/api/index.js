const express = require('express');
const getMenu = require('./handlers/getMenu')
const getAllergens = require('./handlers/getAllergens')

const router = express.Router();

function getRouter(db) {

	router.get('/menu', getMenu.bind(null, db) )
	router.get('/allergens', getAllergens.bind(null, db) )

	return router;
}

module.exports = getRouter;