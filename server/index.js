const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());

const chatRooms = new Map();
app.get('/api/chats/:id', (req, res) => {
  const videoId = req.params.id;
  console.log(`GET /api/chats/${videoId}`);
  if (!chatRooms.has(videoId)) {
    chatRooms.set(videoId, []);
  }
  res.json({ chats: chatRooms.get(videoId) });
});



// Socket.IO connection
io.on('connection',(socket) => {
  console.log('=============> A user connected to the server');


  socket.on('join', (videoId) => {
    console.log(`User joined room: ${videoId}`);
    socket.emit('joined',videoId);
  });

  // Handle chat messages
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    chatRooms.set(msg.videoId, [...chatRooms.get(msg.videoId), msg.value]);
    // Broadcast message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('=============> A user connected disconnected from the server');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
