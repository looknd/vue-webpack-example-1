var client = require('socket.io-client')
var io = client.connect('http://tranquil-stream-4348.herokuapp.com:80/')
var Emitter = require('events').EventEmitter
var socket = module.exports = new Emitter()
var connected = false

socket.connect = function(username) {
  // Tell the server your username
  io.emit('add user', username)
}

socket.send = function(message) {
  // tell server to execute 'new message' and send along one parameter
  io.emit('new message', message);
}

io.on('login', function (data) {
  connected = true;
  socket.emit('logged in', data)
})

// Whenever the server emits 'new message', update the chat body
io.on('new message', function (data) {
  socket.emit('new message', data)
})

// Whenever the server emits 'user joined', log it in the chat body
io.on('user joined', function (data) {
  socket.emit('user joined', data)
})

// Whenever the server emits 'user left', log it in the chat body
io.on('user left', function (data) {
  socket.emit('user left', data)
})