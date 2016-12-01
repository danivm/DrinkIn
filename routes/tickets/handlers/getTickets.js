const Restaurant = require('../../../models/Restaurant')
const Category = require('../../../models/Category')

function getTickets(req,res) {
	const user = req.user;
	const title = 'Tickets'

	function getRestaurant(user) {
		return Restaurant.findOne({account: user._id})
					.then( oRestaurant => oRestaurant.name )
	}

	function getCategories(restaurantName){
		return Category.find({account: user._id})
					.then( (categories) => {
						res.render('tickets', { user, restaurantName, categories, title }) 
					})
	}

	getRestaurant( user )
		.then( getCategories )
		.catch( err => console.log(err) )
}

module.exports = getTickets;