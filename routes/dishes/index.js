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
router.post('/', addDishes)
router.delete('/:id', delDishes)

router.get('/edit/:id', getEditDish)
router.put('/edit', putEditDish)

router.put('/toggleinfo', toggleInfoDish)
router.put('/togglestock', toggleStockDish)

function isAuthenticated(req, res, next) {
  if ( req.isAuthenticated() ) {
  	debugger;
  	return next();
  }
  debugger;
  res.redirect('/local/login');
}

module.exports = router;

