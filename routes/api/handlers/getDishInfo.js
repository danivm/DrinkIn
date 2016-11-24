const Dish = require('../../../models/Dish')

function getDishInfo(req, res) {

	Dish.findById(req.params.id)
		.then(data=>res.json(data))
		.catch( err => console.log(err) )
}

module.exports = getDishInfo;