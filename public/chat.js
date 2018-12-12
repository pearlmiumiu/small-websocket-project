//make connection 
//we already load io at the browser html file
//we need to make connection to the server. 
//when we make connection, in the backend index.js file is listening to the connection,
//and then fire the callback function, the backend console log the message 
var socket= io.connect('http://localhost:4000');


// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');

//emit evvent

btn.addEventListener('click', function(){
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	})
})

//listen for evnets
//data is from the server side, 
socket.on('chat', function(data){
	output.innerHTML+='<p><strong>'+data.handle+ ';</strong>'+data.message+'</p>';
})