function getCategories(db, req, res) {
	const { skip, limit, projection } = req
	db.collection("categories")
		.find()
		.toArray()
		.then(categories => {
			res.render('categories', { categories })
		})
		.catch( err => console.log(err) )
}

module.exports = getCategories;