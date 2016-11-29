const Ticket = require('../../../models/Ticket')

function addTicket(data) {
	var newTicket = new Ticket(data);
	return newTicket.save()
}

module.exports = addTicket