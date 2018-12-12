var express=require('express');
var socket=require('socket.io');


//App setup
var app=express();

var server= app.listen(4000, function(){
	console.log('listening to request port 4000')
})

//static files
app.use(express.static('public'))

//socket setup
var io=socket(server); //just invoke the function.

// each client has a connection. there is a socket between client and server
//socket is sitting around the server and waiting for client/browser to make a connection 
//and set up websocket between two
//listen out event called connection. 
//when we make connection, the call back fucntion is fired.
//
io.on('connection', function(socket){
	console.log('made socket connection', socket.id);

   //data is the message we receive from client side
	socket.on('chat', function(data){
		//backend sockets(other) emit to the front end
		io.sockets.emit('chat', data) 

	})
 	//data is the username of the handle
	socket.on('typing', function(data){
		//individual socket, emit to every single client, not the orginal one
		//
		socket.broadcast.emit('typing', data)

	})


})

