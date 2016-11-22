const ObjectID = require('mongodb').ObjectID

function putEditDish(db, req, res) {
	const { skip, limit, projection } = req
	const { id, name, price, description, sAllergens } = req.body
	const allergens = sAllergens.split(',')

	function updateDish(idDish, name, price, description){
		return db.collection("dishes")
					.update(
						{ _id: ObjectID(idDish) },
						{
							$set: {name, price, description, allergens}
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
								"dishes.$.allergens" : oDish.allergens
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