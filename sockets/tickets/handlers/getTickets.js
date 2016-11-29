const Ticket = require('../../../models/Ticket')

function getTickets(data) {
	return Ticket.find({account: data.account})
				.populate('dish')
}

module.exports = getTickets