const Allergen = require('../../../models/Allergen')

function getAllergens(req, res) {

	Allergen.find({ account: req.params.id })
		.then( data => res.json(data) )
		.catch( err => console.log(err) )
}

module.exports = getAllergens;