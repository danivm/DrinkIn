const ObjectID = require('mongodb').ObjectID

function addDishes(db, req, res) {
	var newDish = req.body;
	var idCat = newDish.category;

	function insertDish( oDish ) {
		return db.collection("dishes")
					.insert(oDish)		
					.then( () => oDish )
	}

	function updateDishInCategory( idCategory, oDish ) {
		return db.collection("categories")
				.update( 
					{ _id: ObjectID(idCategory) },
					{ 
						$push: {
							dishes: { 
								_id: oDish._id, 
								name: oDish.name, 
								price: oDish.price 
							}
		     			}
					}
				)
	}

	insertDish(newDish)
		.then( updateDishInCategory.bind(null, idCat) )
		.then( () => res.redirect('/admin/dishes') )
		.catch( err => new Error('something failed inserting data...'))


	//res.redirect('/dishes');
}

module.exports = addDishes;