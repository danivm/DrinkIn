const Ticket = require('../../../models/Ticket')

function getTickets(data) {
	return Ticket.find({account: data.account})
				.where('status').lt(3)
				.sort({creationDate: 'desc'})
				.populate('dish')
}

module.exports = getTickets