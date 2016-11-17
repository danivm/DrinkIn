const ObjectID = require('mongodb').ObjectID

function getEditDishes(db, req, res) {
	const { skip, limit, projection } = req
	const id = req.params.id;
	
	function getDish(idDish) {
		return db.collection('dishes')
					.find({ _id: ObjectID(id) })
					.toArray()
					.then(oDish=>oDish[0])
					.then(oDish=>{
						if(oDish.allergens==undefined){
							oDish.allergens=[]
						}
						return oDish
					})
	}

	function getAllergens(dish){
		
		return db.collection("allergens")
					.find()
					.toArray()
					.then( (allergens) => {
						res.render('dish-edit', { dish, allergens }) 
					})
	}

	getDish(id)
		.then(getAllergens)
		.catch( err => console.log(err) )

	// db.collection("dishes")
	// 	.find({ _id: ObjectID(id) })
	// 	.toArray()
	// 	.then(dish => {
	// 		dish=dish[0]
	// 		res.render('dish-edit', { dish })
	// 	})
	// 	.catch( err => console.log(err) )
}

module.exports = getEditDishes;