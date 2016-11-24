const Dish = require('../../../models/Dish')
const Category = require('../../../models/Category')

function delDishes(req, res) {
	console.log(req.params.id);

	function updateDishInCategory( oDish ) {
		const idCategory = oDish.category
		return Category.findByIdAndUpdate( idCategory, {
			$pull: { dishes: oDish._id }
		})  
	}

	function deleteDish( id ) {
		return Dish.findByIdAndRemove(id)
					.then( oDish => oDish )
					.catch( console.log )
	}

	deleteDish(req.params.id)
		.then( updateDishInCategory )
		.then( res.sendStatus(200) )
		.catch( err => new Error('something failed inserting data...'))
}

module.exports = delDishes;
