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

io.on('connection', (socket) => {
    
    socket.on('disconnect', () => {
        console.log('User was disconnect');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app }