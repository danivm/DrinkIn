function getAllergens(db, req, res) {
	const { skip, limit, projection } = req
	const title = 'Allergens'
	db.collection("allergens")
		.find()
		.toArray()
		.then(allergens => {
			res.render('allergens', { allergens, title })
		})
		.catch( err => console.log(err) )
}

module.exports = getAllergens;