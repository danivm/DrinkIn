const ObjectID = require('mongodb').ObjectID

function getEditDishes(db, req, res) {
	const { skip, limit, projection } = req
	const id = req.params.id;
	
	db.collection("dishes")
		.find({ _id: ObjectID(id) })
		.toArray()
		.then(dish => {
			dish=dish[0]
			res.render('dish-edit', { dish, id })
		})
		.catch( err => console.log(err) )
}

module.exports = getEditDishes;