const Dish = require('../../../models/Dish')
const Allergen = require('../../../models/Allergen')
const Restaurant = require('../../../models/Restaurant')
const mongoose = require('mongoose')

function getEditDishes(req, res) {

	const user = req.user;
	const dishID = req.params.id;
	
	const getDish = (idDish) => Dish.findById(idDish) // return oDish

	function getRestaurant(dish) {
		return Restaurant.findOne({ account: user._id })
					.then( ({ name: restaurantName }) => {
						return { restaurantName, dish }
					})
	}

	function getAllergens( oData ) {
		return Allergen.find({ account: user._id })
					.then( allergens => {
						oData.allergens = allergens;
						oData.user = user;
						return oData
					}) 
	}

	function renderTemplate( data ) {
		const { image_url } = data.dish;
		data.title = 'Dishes'
		data.predefined_css = `#preview-image { background-image: url( ${image_url} ) }`
		res.render('dish-edit', data ) 
	} 

	getDish( dishID )
		.then( getRestaurant )
		.then( getAllergens )
		.then( renderTemplate )
		// .then( addDataRestaurant )
		// .then( renderTemplate )
		.catch( console.log )

}

module.exports = getEditDishes;