const Category = require('../../../models/Category')
const title = 'Dishes'

function getDishes(req,res) {
	
	Category.find()
		.populate('dishes')
		.then( categories => {
			const user = req.user;
			res.render('dishes', { user, categories, title })	
		})
		.catch( console.log )

}

module.exports = getDishes;