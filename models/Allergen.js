const mongoose = require('mongoose')

const collection = 'allergens';

// Schema definition
const allergenSchema = mongoose.Schema({
	name: String
},
{ collection });

// Model definition
var Allergen = mongoose.model('Allergen', allergenSchema);

module.exports = Allergen
