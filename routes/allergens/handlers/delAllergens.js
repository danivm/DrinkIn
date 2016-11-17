const ObjectID = require('mongodb').ObjectID

function delAllergens(db, req, res) {
	const { skip, limit, projection } = req

	const id = req.params.id;

	db.collection("allergens")
		.remove( { _id: ObjectID(id) })
		.then(res.sendStatus(200))
}

module.exports = delAllergens;