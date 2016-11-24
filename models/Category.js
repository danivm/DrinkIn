const mongoose = require('mongoose')

const collection = 'categories';

// Schema definition
const categorySchema = mongoose.Schema({
	name: String,
	dishes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }]
},
{ collection });

// Model definition
var Category = mongoose.model('Category', categorySchema);

module.exports = Category
