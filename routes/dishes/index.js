const express = require('express');
const router = express.Router();

const getDishes = require('./handlers/getDishes')
const addDishes = require('./handlers/addDishes')
const delDishes = require('./handlers/delDishes')
const getEditDish = require('./handlers/getEditDish')
const putEditDish = require('./handlers/putEditDish')
const toggleInfoDish = require('./handlers/toggleInfoDish')
const toggleStockDish = require('./handlers/toggleStockDish')

router.get('/', isAuthenticated, getDishes)
router.post('/', isAuthenticated)
router.delete('/:id', isAuthenticated, delDishes)

router.get('/edit/:id', isAuthenticated, getEditDish)
router.put('/edit', isAuthenticated, putEditDish)

router.put('/toggleinfo', isAuthenticated, toggleInfoDish)
router.put('/togglestock', isAuthenticated, toggleStockDish)

function isAuthenticated(req, res, next) {
  if ( req.isAuthenticated() ) {
  	return next();
  }
  res.redirect('/login');
}

module.exports = router;

