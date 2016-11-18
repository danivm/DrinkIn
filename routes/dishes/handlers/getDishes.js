function getDishes(db, req, res) {
	const { skip, limit, projection } = req
	const title = 'Dishes'
	db.collection("categories")
		.find()
		.toArray()
		.then(categories => {
			res.render('dishes', { categories, title })
		})
		.catch( err => console.log(err) )
}

module.exports = getDishes;