const Category = require('../../../models/Category')

function addCategories(req,res) {

	var newCategory = new Category(req.body);

	newCategory.save()
		.then(res.redirect('/admin/categories'))
		.catch(console.log)

}

module.exports = addCategories;