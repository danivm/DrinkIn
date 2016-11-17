function getAllergens(db, req, res) {
	const { skip, limit, projection } = req
	db.collection("allergens")
		.find()
		.toArray()
		.then(allergens => {
			res.render('allergens', { allergens })
		})
		.catch( err => console.log(err) )
}

module.exports = getAllergens;