const app = require("express")();
const server = require("http").createServer(app);
const PORT = 5000;
const { nanoid } = require("nanoid");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

let users = [];
let rooms = [];

// User connect
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  socket.emit("me", socket.id);
  users.push(socket.id);

  // Updating users array
  socket.broadcast.emit("updateUsers", users);

  // User disconnect
  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected.`);
    users = users.filter((user) => user !== socket.id);
    console.log("disconnected all users:", users);
    socket.broadcast.emit("updateUsers", users);
    socket.disconnect();
  });

  // Fetch users array
  socket.emit("getAllUsers", users);
  console.log("all users:", users);

  // Create Rooms
  socket.on("createRoom", () => {
    const room = {
      id: nanoid(5),
      chat: [],
    };
    socket.join(room);
    socket.emit("getRoom", room);
    console.log("Room created: " + room.id);
    rooms.push(room);
    socket.broadcast.emit("updateRooms", rooms);
  });

  //Join Rooms
  socket.on("joinRoom", (room) => {
    socket.join(room.id);
    console.log(`user ${socket.id} joined room: ${room.id}`);
  });
  socket.emit("getAllRooms", rooms);
  socket.broadcast.emit("updateRooms", rooms);

  // Message
  socket.on("message", (payLoad) => {
    console.log(`Message from ${socket.id} : ${payLoad.message}`);
    rooms.map((room) => {
      if (room.id === payLoad.room) {
        singleChat = { message: payLoad.message, writer: payLoad.socketId };
        room.chat.push(singleChat);
        payLoad.chat = room.chat;
      }
    });
    // sends message to given room
    io.to(payLoad.room).emit("chat", payLoad);
  });
});

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
