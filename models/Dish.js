const mongoose = require('mongoose')

const collection = 'dishes';

// Schema definition
const dishSchema = mongoose.Schema({
	name: String,
	price: String,
	description: String,
	image_url: {type: String, default: 'https://firebasestorage.googleapis.com/v0/b/drinkin-c4a5b.appspot.com/o/dishes%2Fbeer.jpg?alt=media&token=2d1a879d-667e-436d-a65e-c4d5bab18adf'},
	stock: { type: Boolean, default: true },
	info: { type: Boolean, default: true },
	allergens: [ String ],
	category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    account: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Account'
	}
},
{ collection });

// Model definition
var Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish
