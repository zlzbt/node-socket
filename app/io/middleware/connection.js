module.exports = app => {
    return async (ctx, next) => {
        ctx.socket.emit('res', '1111!');
        console.log('connected!');
        await next();
        // execute when disconnect.
        console.log('disconnection!');
    };

    
};