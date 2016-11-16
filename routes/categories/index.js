const express = require('express');
const getCategories = require('./handlers/getCategories')
const addCategories = require('./handlers/addCategories')
const delCategories = require('./handlers/delCategories')

const router = express.Router();

function getRouter(db) {

	router.get('/', getCategories.bind(null, db) )
	router.post('/', addCategories.bind(null, db) )
	router.delete('/:id', delCategories.bind(null, db) )

	return router;
}

module.exports = getRouter;