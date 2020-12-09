/*
//socket.io requirements and imports
const path = require('path')
const express = require('express');
const http = require('http');
const socketio = require('socket.io')

const app = express(); //runs express
const server = http.createServer(app)
const io = socketio(server);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000 ; //choose a static port 3000 or checks if the environment folder has a defined port(dynamic)

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


io.on('connection', socket => {
  console.log('a user connected');
  socket.on('message', (msg) => {
    console.log(msg);
    socket.broadcast.emit('message-broadcast', msg);
  });
});



*/
