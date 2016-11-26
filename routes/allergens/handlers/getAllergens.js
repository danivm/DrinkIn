const Allergen = require('../../../models/Allergen')
const title = 'Allergens'

function getAllergens(req,res) {

	Allergen.find()
		.then( allergens => {
			const user = req.user;
			res.render('allergens', { user, allergens, title })	
		})
		.catch( console.log )

}

module.exports = getAllergens;