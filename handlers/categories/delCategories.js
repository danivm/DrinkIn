const ObjectID = require('mongodb').ObjectID

function delCategories(db, req, res) {
	const { skip, limit, projection } = req

	const id = req.params.id;

	db.collection("categories")
		.remove( { _id: ObjectID(id) })
		.then(res.sendStatus(200))
}

module.exports = delCategories;