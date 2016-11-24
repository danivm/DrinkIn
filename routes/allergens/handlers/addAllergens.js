const Allergen = require('../../../models/Allergen')

function addAllergens(req,res) {

	var newAllergen = new Allergen(req.body);

	newAllergen.save()
		.then(res.redirect('/admin/allergens'))
		.catch(console.log)

}

module.exports = addAllergens;