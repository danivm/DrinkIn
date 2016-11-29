const express = require('express');
const router = express.Router();

const getTickets = require('./handlers/getTickets')

router.get('/', isAuthenticated, getTickets)

function isAuthenticated(req, res, next) {
  if ( req.isAuthenticated() ) {
  	return next();
  }
  res.redirect('/login');
}

module.exports = router;