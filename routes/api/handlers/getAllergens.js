const Allergen = require('../../../models/Allergen')

function getAllergens(req, res) {

	Allergen.find()
		.then( data => res.json(data) )
		.catch( err => console.log(err) )
}

module.exports = getAllergens;