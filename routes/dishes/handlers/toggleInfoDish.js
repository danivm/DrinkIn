const Dish = require('../../../models/Dish')

function toggleInfoDish(req, res) {
	const { skip, limit, projection } = req
	const { id, toggle } = req.body

	Dish.findByIdAndUpdate(id, { info: toggle })
		.then(res.sendStatus(200))
		.catch( err => new Error('something failed inserting data...'))

}

module.exports = toggleInfoDish;