const Ticket = require('../../../models/Ticket')

function updateTickets(data) {
	const id = data.idTicket
	const status = data.status
	return Ticket.findByIdAndUpdate(id, {$set: {status}})
}

module.exports = updateTickets

