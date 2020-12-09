let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io').listen(http);

app.get('/', (req, res) => res.send('I can respond, im a node server!'));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', (msg) => {
    console.log(msg);
    socket.broadcast.emit('message-broadcast', msg);
  });
});

http.listen(3000, () =>  {
  console.log('listening on *:3000');
});

