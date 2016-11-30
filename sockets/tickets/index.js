const getTickets = require('./handlers/getTickets')
const addTicket = require('./handlers/addTicket')

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
			console.log('add ticket OK')
			addTicket(data)
				.then(getTickets)
				.then( tickets => {
					io.sockets.emit('tickets', tickets)
				})	
		})
	})
}

module.exports = eventsSocket;