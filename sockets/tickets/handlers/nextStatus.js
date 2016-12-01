const Ticket = require('../../../models/Ticket')

function nextStatus(data) {
	const id = data.idTicket
	return Ticket.findByIdAndUpdate(id, {$inc: {status: 1}})
}

module.exports = nextStatus