function getDishes(db, req, res) {
	const { skip, limit, projection } = req
	db.collection("categories")
		.find()
		.toArray()
		.then(categories => {
			res.render('dishes', { categories })
		})
		.catch( err => console.log(err) )
}

module.exports = getDishes;