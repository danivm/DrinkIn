const Dish = require('../../../models/Dish')
const Allergen = require('../../../models/Allergen')
const Restaurant = require('../../../models/Restaurant')
const title = 'Dishes'

function getEditDishes(req, res) {
	const user = req.user;
	const dishID = req.params.id
	let restaurantName = ''

	Restaurant.findOne({ account: user._id })
					.then(restaurant => {
						restaurantName = restaurant.name
					})

	function getDish(idDish) {
		return Dish.findById(idDish)
					.then( oDish => oDish)
	}

	function getAllergens(dish){
		return Allergen.find({ account: user._id })
					.then( (allergens) => {	
						const predefined_css = `#preview-image { background-image: url( ${dish.image_url} ) }`
						res.render('dish-edit', { user, dish, allergens, restaurantName, title, predefined_css }) 
					})
	}

	getDish(dishID)
		.then(getAllergens)
		.catch( err => console.log(err) )

}

module.exports = getEditDishes;