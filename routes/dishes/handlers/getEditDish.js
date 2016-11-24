const Dish = require('../../../models/Dish')
const Allergen = require('../../../models/Allergen')
const title = 'Dishes'

function getEditDishes(req, res) {
	
	function getDish(idDish) {
		return Dish.findById(idDish)
					.then( oDish => oDish)
	}

	function getAllergens(dish){
		return Allergen.find()
					.then( (allergens) => {
						res.render('dish-edit', { dish, allergens, title }) 
					})
	}

	getDish(req.params.id)
		.then(getAllergens)
		.catch( err => console.log(err) )

}

module.exports = getEditDishes;