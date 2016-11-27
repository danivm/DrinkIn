const mongoose = require('mongoose')

const collection = 'allergens';

// Schema definition
const allergenSchema = mongoose.Schema({
	name: String,
	account: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Account'
	}
},
{ collection });

// Model definition
var Allergen = mongoose.model('Allergen', allergenSchema);

module.exports = Allergen
