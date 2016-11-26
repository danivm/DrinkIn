const Category = require('../../../models/Category')
const title = 'Categories'

function getCategories(req,res) {

	Category.find()
		.then( categories => {
			const user = req.user;
			res.render('categories', { user, categories, title })	
		})
		.catch( console.log )

}

module.exports = getCategories;