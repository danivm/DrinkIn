const Dish = require('../../../models/Dish')
const Category = require('../../../models/Category')


function addDishes(req, res) {

	const newDish = new Dish(req.body);
	const idCat = newDish.category;

	function updateDishInCategory( idCategory, oDish ) {
		return Category.findByIdAndUpdate( idCategory, {
			$push: { dishes: oDish._id }
		})  
	}

	newDish.save()
		.then( updateDishInCategory.bind(null, idCat) )
		.then( () => res.redirect('/admin/dishes') )
		.catch( err => new Error('something failed inserting data...'))


	//res.redirect('/dishes');
}

module.exports = addDishes;