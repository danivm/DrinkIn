function getAllergens(db, req, res) {
	const { skip, limit, projection } = req

	db.collection("allergens")
		.find()
		.toArray()
		.then(data=>res.json(data))
		.catch( err => console.log(err) )
}

module.exports = getAllergens;