const mongoose = require('mongoose')

const collection = 'dishes';

// Schema definition
const dishSchema = mongoose.Schema({
	name: String,
	price: String,
	description: String,
	stock: { type: Boolean, default: true },
	info: { type: Boolean, default: true },
	allergens: [ String ],
	category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
},
{ collection });

// Model definition
var Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish
