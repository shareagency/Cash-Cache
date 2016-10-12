
var connections = [];

module.exports = function (io) {

  io.sockets.on('connection', function (socket) {
    global.socket = socket;
  	socket.once('disconnect', function() {
  		connections.splice(connections.indexOf(socket), 1);
  		socket.disconnect();
  		console.log("Disconnected: %s sockets remaining.", connections.length);
  	});

  	connections.push(socket);
      console.log("Connected: %s sockets connected.", connections.length);
  });

};
