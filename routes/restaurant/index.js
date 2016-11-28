const express = require('express');
const router = express.Router();

const getRestaurant = require('./handlers/getRestaurant')
const putRestaurant = require('./handlers/putRestaurant')

router.get('/', isAuthenticated, getRestaurant)
router.put('/', isAuthenticated, putRestaurant)

function isAuthenticated(req, res, next) {
  if ( req.isAuthenticated() ) {
  	return next();
  }
  res.redirect('/login');
}

module.exports = router;