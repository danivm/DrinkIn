const mongoose = require('mongoose')

const collection = 'restaurants';

// Schema definition
const restaurantSchema = mongoose.Schema({
	name: { type: String, default: 'My New Bar' },
	numTables: { type: Number, default: 20 },
	image_url: String,
	account: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Account'
	}
},
{ collection });

// Model definition
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant