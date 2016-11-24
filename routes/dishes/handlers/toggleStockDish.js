const Dish = require('../../../models/Dish')

function toggleStockDish(req, res) {
	const { skip, limit, projection } = req
	const { id, toggle } = req.body

	Dish.findByIdAndUpdate(id, { stock: toggle })
		.then(res.sendStatus(200))
		.catch( err => new Error('something failed inserting data...'))

}

module.exports = toggleStockDish;