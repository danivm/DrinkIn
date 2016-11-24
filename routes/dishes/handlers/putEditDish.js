const Dish = require('../../../models/Dish')

function putEditDish(req, res) {
	const { id, name, price, description, sAllergens } = req.body
	const allergens = sAllergens.split(',')
console.log(allergens)
	Dish.findByIdAndUpdate(id, {
			$set: {name, price, description, allergens}
		})
		.then( res.sendStatus(200) )
		.catch( err => new Error('something failed inserting data...'))

}

module.exports = putEditDish;