const ObjectID = require('mongodb').ObjectID

function getDishInfo(db, req, res) {
	const { skip, limit, projection } = req
	const id = req.params.id;

	db.collection("dishes")
		.find({ _id: ObjectID(id) })
		.toArray()
		.then(oDish=>oDish[0])
		.then(data=>res.json(data))
		.catch( err => console.log(err) )
}

module.exports = getDishInfo;