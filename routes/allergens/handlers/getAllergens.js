const Allergen = require('../../../models/Allergen')
const title = 'Allergens'

function getAllergens(req,res) {

	Allergen.find()
		.then( allergens => {
			res.render('allergens', { allergens, title })	
		})
		.catch( console.log )

}

module.exports = getAllergens;