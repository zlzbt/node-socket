const socket = (io) => {
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
            console.log('message: ' + msg);
        });
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    
        // 向除某个发射套接字之外的所有人发送消息
        socket.broadcast.emit('hi');
    
        io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });
    });
}
module.exports = socket;
