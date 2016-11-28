const Allergen = require('../../../models/Allergen')
const Restaurant = require('../../../models/Restaurant')
const title = 'Allergens'

function getAllergens(req,res) {
	const user = req.user;

	function getRestaurant(user) {
		return Restaurant.findOne({account: user._id})
					.then( oRestaurant => oRestaurant.name )
	}

	function getAll(restaurantName){
		return Allergen.find({account: user._id})
					.then( (allergens) => {
						res.render('allergens', { user, restaurantName, allergens, title }) 
					})
	}

	getRestaurant(user)
		.then(getAll)
		.catch( err => console.log(err) )

}

module.exports = getAllergens;