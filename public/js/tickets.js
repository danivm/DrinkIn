//var socket = io.connect('http://localhost:3000');
var socket = io.connect('https://uorderbcn.herokuapp.com/')
//var socket = io()

socket.on('tickets', function(data) {  
	render(data);
})

getTickets();

function render(data) {  
	var html = data.map(function(ticket, index) {
		var textStatus=''
		var sel0=''
		var sel1=''
		var sel2=''
		var sel3=''
		switch (ticket.status) {
			case 0:
				textStatus='Pendiente';
				sel0='selected'
				break;
			case 1:
				textStatus='Marchando';
				sel1='selected'
				break;
			case 2:
				textStatus='Servido';
				sel2='selected'
				break;
			case 3:
				textStatus='Pagado';
				sel3='selected'
				break;
		}
		var creationDate = new Date(ticket.creationDate)

		var h = addZero(creationDate.getHours())
		var m = addZero(creationDate.getMinutes());
		var hour = h+":"+m
		return(`<div class="ticket-container row ${textStatus} ${ticket.dish.category}">
							<div class="col-xs-2">
								<p>${hour}</p>
							</div>
							<div class="col-xs-2">
								<p><strong>${ticket.table}</strong></p>
							</div>
							<div class="col-xs-4">
								<p>${ticket.dish.name}</p>
							</div>
							<div class="col-xs-2 hidden-xs">
								<select class="form-control status" onchange="updateTicket('${ticket._id}', this.value)">
								  <option value="0" ${sel2}>Pendiente</option>
								  <option value="1" ${sel1}>Marchando</option>
								  <option value="2" ${sel2}>Servido</option>
								  <option value="3" ${sel3}>Pagado</option>
								</select>
							</div>
							<div class="col-sm-2 col-xs-4">
								<button class="btn btn-block btn-ticket" onclick="nextStatus('${ticket._id}')">OK</button>
							</div>
						</div>`);
	}).join(" ");

	document.getElementById('tickets-container').innerHTML = html;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getTickets() {  
	var data = { account: document.getElementById('accountID').value}
	socket.emit('get-tickets', data);
	return false;
}

function updateTicket(idTicket, status) {
	var data = {idTicket: idTicket, status: status}
	socket.emit('update-ticket', data)
}
function nextStatus(idTicket) {
	var data = {idTicket: idTicket}
	socket.emit('next-status', data)
}

