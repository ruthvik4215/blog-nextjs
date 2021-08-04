"use strict";

var _require = require('dgram'),
    Socket = _require.Socket;

var express = require('express');

var app = express();

var http = require('http');

var server = http.createServer(app);

var _require2 = require('socket.io'),
    Server = _require2.Server;

var io = new Server(server);
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
  socket.on('chat message', function (msg, messageCreatedAt) {
    io.emit("chat message", msg, messageCreatedAt);
  });
});
server.listen(3000, function () {
  console.log("listening on port 3000");
});