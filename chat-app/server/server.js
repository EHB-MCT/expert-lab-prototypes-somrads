const app = require("express")();
const server = require("http").createServer(app);
const PORT = 5000;
const {nanoid} = require("nanoid");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const users = [];
const rooms = [];

// User connect
io.on("connection", (socket) => {
  socket.emit("me", socket.id);
  users.push(socket.id);

  // Updating users array
  socket.broadcast.emit("updateUsers", users);

  // User disconnect
  socket.on("disconnect", () => {
    users = users.filter((user) => user !== socket.id);
    socket.broadcast.emit("updateUsers", users);
    socket.disconnect();
  });

  // Fetch users array
  socket.emit("getAllUsers", users);

  // Create Rooms
  socket.on("createRoom", () => {
    const room = {
      id: nanoid(5),
      chat: [],
    };
    socket.join(room);
    socket.emit("getRoom", room);
    rooms.push(room);
    socket.broadcast.emit("updateRooms", rooms);
  });

  //Join Rooms
  socket.on("joinRoom", (room) => {
    socket.join(room.id);
  });
  socket.broadcast.emit("updateRooms", rooms);

  // Message
  socket.on("message", (payLoad) => {
    rooms.map((room) => {
      if (room.id === payLoad.room) {
        singleChat = { message: payLoad.message, writer: payLoad.socketId };
        room.chat.push(singleChat);
      }
    });
    // sends message to given room
    io.to(payLoad.room).emit("chat", payLoad);
  });
});

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
