const Category = require('../../../models/Category')
const title = 'Dishes'

function getDishes(req,res) {
	const user = req.user;
	Category.find({ account: user._id})
		.populate('dishes')
		.then( categories => {
			res.render('dishes', { user, categories, title })	
		})
		.catch( console.log )

}

module.exports = getDishes;