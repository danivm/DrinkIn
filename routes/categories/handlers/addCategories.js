function addCategories(db, req, res) {
	var newCategory = req.body;
	newCategory.dishes = []
	db.collection("categories").insert(newCategory)
	res.redirect('/admin/categories');
}

module.exports = addCategories;