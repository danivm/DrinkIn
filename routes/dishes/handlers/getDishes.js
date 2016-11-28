const Category = require('../../../models/Category')
const Restaurant = require('../../../models/Restaurant')
const title = 'Dishes'

function getMenu(req,res) {
	const user = req.user;

	function getRestaurant() {
		return Restaurant.findOne({account: user._id})
					.then( oRestaurant => oRestaurant.name )
	}

	function getDishes(restaurantName){
		return Category.find({ account: user._id})
					.populate('dishes')
					.then( categories => {
						res.render('dishes', { user, restaurantName, categories, title })	
					})
					.catch( console.log )
	}

	getRestaurant()
		.then(getDishes)
		.catch( err => console.log(err) )
}

module.exports = getMenu;