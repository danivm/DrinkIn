const Category = require('../../../models/Category')
const Restaurant = require('../../../models/Restaurant')
const title = 'Categories'

function getCategories(req,res) {
	const user = req.user;

	function getRestaurant(user) {
		return Restaurant.findOne({account: user._id})
					.then( oRestaurant => oRestaurant.name )
	}

	function getCat(restaurantName){
		return Category.find({account: user._id})
					.then( (categories) => {
						res.render('categories', { user, restaurantName, categories, title }) 
					})
	}

	getRestaurant(user)
		.then(getCat)
		.catch( err => console.log(err) )

}

module.exports = getCategories;