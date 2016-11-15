function getCategories(db, req, res) {
	const { skip, limit, projection } = req
	db.collection("categories")
		.find()
		.toArray()
		.then(categories => {
			console.log('log 1')
			res.render('categories', { categories })
		})
		.catch( err => console.log(err) )
}

module.exports = getCategories;