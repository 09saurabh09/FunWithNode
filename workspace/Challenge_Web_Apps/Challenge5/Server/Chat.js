//var io = require("../app").socket;
//console.log(io);
//var io = app.io;
//var io = app.socket;
/*
io.on('connection', function (socket) {
    console.log("User connected");
    // Relay chat data to all clients
    socket.on('chat', function(data) {
        console.log(data);
        socket.emit('chat',data);
        socket.broadcast.emit('chat', data);
    });
});
*/
var socketio = require('socket.io')
var ioServer;
var players = {};
var comptetors = {};
var id = 'Fkr0H7QyF8E5o9QrAAAC'; 
module.exports.listen = function(http){
    ioServer = socketio.listen(http);


    ioServer.on('connection', function(socket){
        console.log("User connected");
        console.log(players);
        console.log(socket.handshake.query);
        if(players[socket.handshake.query.key]){
            if(players[socket.handshake.query.key].status=='empty') {
                players[socket.handshake.query.key].status = 'filled';
                players[socket.handshake.query.key].ids = 'socket.id';
                comptetors[players[socket.handshake.query.key].idf] = socket.id;
                comptetors[socket.id] = players[socket.handshake.query.key].idf;
                console.log(comptetors);
            }
        }
        id = socket.id;
        
        socket.on('chat',function(msg) {
        console.log(msg.message);
        //ioServer.sockets.connected[id].emit('chatm',msg);
        //ioServer.emit('chatm',msg);
        });
        
        socket.on('turn',function(msg) {
        console.log(msg.message);
        ioServer.sockets.connected[comptetors[socket.id]].emit('chatm',msg);
        console.log(comptetors[socket.id]);
        //ioServer.emit('chatm',msg);
        });
        
        socket.on('invite',function(msg) {
        console.log(msg.uid);
        players[msg.uid]={'status':'empty',
                            'idf':socket.id,
                            'ids':''
                            };
        comptetors[socket.id] = 'blank';
        console.log(socket.id);
        //ioServer.sockets.connected[id].emit('chatm',msg);
        //ioServer.emit('chatm',msg);
        });
    });
    
    

    return ioServer;
}

