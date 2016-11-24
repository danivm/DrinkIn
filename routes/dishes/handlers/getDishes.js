const Category = require('../../../models/Category')
const title = 'Dishes'

function getDishes(req,res) {

	Category.find()
		.populate('dishes')
		.then( categories => {
			res.render('dishes', { categories, title })	
		})
		.catch( console.log )

}

module.exports = getDishes;