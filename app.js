var express = require('express')
var app = express()
var server = require('http').createServer(app);
var morgan = require('morgan')
var port = process.env.PORT || 3000
// var bodyParser = require('body-parser')
var io = require('socket.io')(server)


app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg, usr){
  	io.emit('chat message', msg)
  	io.emit('chat message', usr)
  })
});


server.listen(port, function(){
	console.log('something something dark side %s', port)
})