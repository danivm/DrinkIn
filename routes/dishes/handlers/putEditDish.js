const ObjectID = require('mongodb').ObjectID

function putEditDish(db, req, res) {
	const { skip, limit, projection } = req
	const { id, name, price, description } = req.body

	function updateDish(idDish, name, price, description){
		console.log(idDish)
		console.log(description)
		return db.collection("dishes")
					.update(
						{ _id: ObjectID(idDish) },
						{
							$set: {name, price, description}
						}
					)
					.then( () => idDish )
	}
	function getDish(idDish) {
		return db.collection('dishes')
					.find({ _id: ObjectID(idDish) })
					.toArray()
					.then((oDish)=>oDish[0])
	}
	function updateDishInCategory( oDish ) {
		console.log(oDish.name)
		console.log(oDish.price)
		
		return db.collection("categories")
					.update(
						{ 
							_id: ObjectID(oDish.category), 
							"dishes" : {
								$elemMatch : {
									_id: oDish._id	
								}
							}  
						},
						{ 
							$set : { 
								"dishes.$.name" : oDish.name,
								"dishes.$.price" : oDish.price,
							}
						}
					)
					.then( () => oDish )
	}

	updateDish(id, name, price, description)
		.then( getDish )
		.then( updateDishInCategory )
		.then(res.sendStatus(200))
		.catch( err => new Error('something failed inserting data...'))
}

module.exports = putEditDish;