function getCategories(db, req, res) {
	const { skip, limit, projection } = req
	const title='Categories'
	db.collection("categories")
		.find()
		.toArray()
		.then(categories => {
			res.render('categories', { categories, title })
		})
		.catch( err => console.log(err) )
}

module.exports = getCategories;