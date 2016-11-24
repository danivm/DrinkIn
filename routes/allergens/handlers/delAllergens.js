const Allergen = require('../../../models/Allergen')

function delAllergens(req,res) {

	Allergen.findByIdAndRemove(req.params.id)
		.then( allergen => res.sendStatus(200) )
		.catch( console.log )
}

module.exports = delAllergens;