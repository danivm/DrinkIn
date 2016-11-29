const Restaurant = require('../../../models/Restaurant')

function getRestaurantName(req, res) {

	Restaurant.findOne({account: req.params.id})
		.then(data=>res.json(data.name))
		.catch( err => console.log(err) )
}

module.exports = getRestaurantName;