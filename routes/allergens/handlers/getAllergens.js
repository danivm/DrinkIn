const Allergen = require('../../../models/Allergen')
const title = 'Allergens'

function getAllergens(req,res) {
	const user = req.user;
	Allergen.find({ account: user._id })
		.then( allergens => {
			const user = req.user;
			res.render('allergens', { user, allergens, title })	
		})
		.catch( console.log )

}

module.exports = getAllergens;