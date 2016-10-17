
global.socket_connections = [];

module.exports = function (io) {

  io.sockets.on('connection', function (socket) {
  	socket.once('disconnect', function() {
  		socket_connections.splice(socket_connections.indexOf(socket), 1);
  		socket.disconnect();
  		console.log("Disconnected: %s sockets remaining.", socket_connections.length);
  	});

  	socket_connections.push(socket);
      console.log("Connected: %s sockets connected.", socket_connections.length);
  });

};
