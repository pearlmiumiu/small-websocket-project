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
      output = document.getElementById('output'),
      feedback=document.getElementById('feedback');

//emit evvent

btn.addEventListener('click', function(){
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	})
})

//emit typing event to server
//tell server someone is typing
// handle value is the name of user typing

message.addEventListener('keypress', function(){
	socket.emit('typing', handle.value);
})



//listen for evnets
//data is from the server side, 
//we listen to chat event after click 'send', we clear the feedback broadcasting who is sending
socket.on('chat', function(data){
	feedback.innerHTML=''
	output.innerHTML+='<p><strong>'+data.handle+ ': </strong>'+data.message+'</p>';
})

//data is the user hanler, we output it to the browser.
// 
socket.on('typing', function(data){

	feedback.innerHTML='<p><em>'+data+ ' is typing a message ... </em></p>';
})