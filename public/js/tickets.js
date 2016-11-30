//debugger;
var socket = io.connect('http://localhost:3000');
// var socket = io.connect('https://drinkin.herokuapp.com/')
//var socket = io()

socket.on('tickets', function(data) {  
  render(data);
})

getTickets();

function render(data) {  
  var html = data.map(function(ticket, index) {
    return(`<div class="ticket-container row">
              <div class="col-md-2">
                <strong>${ticket.table}</strong>
              </div>
              <div class="col-md-4">
                <p>${ticket.dish.name}</p>
              </div>
              <div class="col-md-2">
                <p>${ticket.dish.price}</p>
              </div>
              <div class="col-md-2">
                <button>OK</button>
              </div>
            </div>`);
  }).join(" ");

  document.getElementById('tickets-container').innerHTML = html;
}

function getTickets() {  
  var data = { account: document.getElementById('accountID').value}
  socket.emit('get-tickets', data);
  return false;
}

// function addTicket(e) {  
//   var newTicket = {
//     dish: document.getElementById('dishID').value,
//     table: document.getElementById('numTable').value,
//     account: document.getElementById('accountID').value,
//     status: 0,
//     creationDate: Date.now(),
//   };

//   socket.emit('add-ticket', newTicket);
//   return false;
// }