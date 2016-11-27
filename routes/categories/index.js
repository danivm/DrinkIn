const express = require('express');
const router = express.Router();

const getCategories = require('./handlers/getCategories')
const addCategories = require('./handlers/addCategories')
const delCategories = require('./handlers/delCategories')

router.get('/', isAuthenticated, getCategories)
router.post('/', isAuthenticated, addCategories)
router.delete('/:id', isAuthenticated, delCategories)

function isAuthenticated(req, res, next) {
  if ( req.isAuthenticated() ) {
  	return next();
  }
  res.redirect('/login');
}

module.exports = router;