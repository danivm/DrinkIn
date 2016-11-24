const Category = require('../../../models/Category')
const title = 'Categories'

function getCategories(req,res) {

	Category.find()
		.then( categories => {
			res.render('categories', { categories, title })	
		})
		.catch( console.log )

}

module.exports = getCategories;