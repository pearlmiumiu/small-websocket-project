# small-websocket-project
node, express, websocket, javascript

#socket is on both broswer and server side
#when one user is typing message, click the send button,
#the broswer socket listen to the event, emit the message, and user info to the backend server socket
#then it make connection to the server socket. 
#when the server socket receive the message data,it emit the message to all the frontend sockets
#the the frontend sockets listen to the event from backend and display the message to other users

#broadcasting message
every client can receive, except the sender himself

