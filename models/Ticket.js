const mongoose = require('mongoose')

const collection = 'tickets';

// Schema definition
const ticketSchema = mongoose.Schema({
	table: Number,
	status: Number,
	creationDate: Date,
	servedDate: Date,
	dish: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Dish'
	},
	account: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Account'
	}
},
{ collection });

// Model definition
var Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket
