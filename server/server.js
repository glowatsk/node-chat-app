const path = require('path')
const http = require('http');
const express = require('express')
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const app = express();
var server = http.createServer(app);
var io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

user = 'Brando';

io.on('connection', (socket) => {
    console.log('New user connected');

     socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat channel, happy messaging',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: `Welcome ${user} to the channel`,
        createdAt: new Date().getTime()
    });
    
    socket.on('createMessage', (message) => {
        console.log('Create Message', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });

        // socket.broadcast.emit('createMessage', (message) => {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnect');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app }