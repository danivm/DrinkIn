const getTickets = require('./handlers/getTickets')
const addTicket = require('./handlers/addTicket')
const updateTicket = require('./handlers/updateTicket')
const nextStatus = require('./handlers/nextStatus')

function eventsSocket(server) {

	//const server = require('http').Server(app);  
	const io = require('socket.io')(server); 

	io.on('connection', function(socket) {  

		console.log('A new client is connected.')

		socket.on('get-tickets', function(data) {
			getTickets(data)
				.then( tickets => {
					io.sockets.emit('tickets', tickets)
				})	
		})
		socket.on('add-ticket', function(data) {
			addTicket(data)
				.then(getTickets)
				.then( tickets => {
					io.sockets.emit('tickets', tickets)
				})	
		})
		socket.on('update-ticket', function(data) {
			updateTicket(data)
				.then(getTickets)
				.then( tickets => {
					io.sockets.emit('tickets', tickets)
				})	
		})
		socket.on('next-status', function(data) {
			nextStatus(data)
				.then(getTickets)
				.then( tickets => {
					io.sockets.emit('tickets', tickets)
				})	
		})
	})
}

module.exports = eventsSocket;