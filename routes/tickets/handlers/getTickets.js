const Restaurant = require('../../../models/Restaurant')

function getTickets(req,res) {
	const user = req.user;
	const title = 'Tickets'

	Restaurant.findOne({account: user._id})
				.then( oRestaurant => oRestaurant.name )
				.then( (restaurantName) => {
					res.render('tickets', {user, restaurantName, title})
				})
				.catch( console.log)
}

module.exports = getTickets;