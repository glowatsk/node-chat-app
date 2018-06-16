const path = require('path')
const http = require('http');
const express = require('express')
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');

const app = express();
var server = http.createServer(app);
var io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

user = 'Brando';

io.on('connection', (socket) => {
    console.log('New user connected');

     socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app, happy chatting!'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', `Everyone welcome ${user} to the chat!`));

    socket.on('createMessage', (message, callback) => {
        console.log('Create Message', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app }