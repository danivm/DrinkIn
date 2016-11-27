const mongoose = require('mongoose')

const collection = 'categories';

// Schema definition
const categorySchema = mongoose.Schema({
	name: String,
	dishes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Dish'
	}],
	account: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Account'
	}
},
{ collection });

// Model definition
var Category = mongoose.model('Category', categorySchema);

module.exports = Category
