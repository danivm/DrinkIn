const ObjectID = require('mongodb').ObjectID

function delDishes(db, req, res) {
	const { skip, limit, projection } = req
	const id = req.params.id;

	function getDish(idDish){
		console.log('log getDish OK!')
		return db.collection("dishes")
					.find({ _id: ObjectID(idDish) })
					.toArray()
					.then( (oDish) => oDish[0] )
	}
	function updateDishInCategory( oDish ) {
		console.log(oDish)
		return db.collection("categories")
				.update( 
					{ _id: ObjectID(oDish.category) },
					{ 
						$pull: {
							dishes: { _id: oDish._id }
		     			}
					}
				)
				.then( () => oDish )
	}
	function deleteDish( oDish ) {
		console.log(oDish._id)
		return db.collection("dishes")
					.remove( { _id: ObjectID(oDish._id) })		
					.then( () => oDish )
	}
	getDish(id)
		.then( updateDishInCategory )
		.then( deleteDish )
		.then(res.sendStatus(200))
		.catch( err => new Error('something failed inserting data...'))
}

module.exports = delDishes;
