const express = require('express');
const getMenu = require('./handlers/getMenu')

const router = express.Router();

function getRouter(db) {

	router.get('/', getMenu.bind(null, db) )

	return router;
}

module.exports = getRouter;