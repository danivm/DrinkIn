const Restaurant = require('../../../models/Restaurant')

function getRestaurants(req, res) {

	Restaurant.find()
		.then(data=>res.json(data))
		.catch( err => console.log(err) )
}

module.exports = getRestaurants;