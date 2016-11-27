const Category = require('../../../models/Category')
const title = 'Categories'

function getCategories(req,res) {
	const user = req.user;
	Category.find({ account: user._id })
		.then( categories => {
			const user = req.user;
			res.render('categories', { user, categories, title })	
		})
		.catch( console.log )

}

module.exports = getCategories;