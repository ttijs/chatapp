//const app = require('express')();
const express = require('express');
const app = express();


const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('message', (msg) => {
        console.log(`message: ${msg}`);
        io.emit('message', msg);
    })
})
