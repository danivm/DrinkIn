function getMenu(db, req, res) {
	const { skip, limit, projection } = req
	db.collection("categories")
		.find()
		.toArray()
		.then(data=>res.json(data))
		.catch( err => console.log(err) )
}

module.exports = getMenu;