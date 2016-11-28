const Dish = require('../../../models/Dish')

function putEditDish(req, res) {
	const { id, name, price, description, image_url, sAllergens } = req.body
	const allergens = sAllergens.split(',')

	Dish.findByIdAndUpdate(id, {
			$set: {name, price, description, allergens, image_url}
		})
		.then( res.sendStatus(200) )
		.catch( err => new Error('something failed inserting data...'))

}

module.exports = putEditDish;