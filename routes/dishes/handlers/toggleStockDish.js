const ObjectID = require('mongodb').ObjectID

function toggleStockDish(db, req, res) {
	const { skip, limit, projection } = req
	const { id, toggle } = req.body
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
								"dishes.$.stock" : toggle,
							}
						}
					)
					.then( () => oDish )
	}

	getDish(id)
		.then( updateDishInCategory )
		.then(res.sendStatus(200))
		.catch( err => new Error('something failed inserting data...'))
}

module.exports = toggleStockDish;