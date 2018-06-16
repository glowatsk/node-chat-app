var socket = io();
        
socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'test@example.com',
        text: 'Hey hey hey'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New Message!', message);
});