import express from "express";
const app = express();
const server = require("http").createServer(app);
const PORT = 5000;
import { nanoid } from "nanoid";
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const users = [];
const rooms = [];

// when client connect to server will get back socket.id
io.on("connection", (socket) => {
  socket.emit("me", socket.id);
  users.push(socket.id);

  // sending users array to all clients with event
  socket.broadcast.emit("updateUsers", users);

  socket.on("disconnect", () => {
    users = users.filter((user) => user !== socket.id);
    socket.broadcast.emit("updateUsers", users);
    socket.disconnect();
  });

  socket.emit("getAllUsers", users);

  // Rooms
  socket.on("createRoom", () => {
    const room = {
      id: nanoid(5),
      chat: [],
    };
  });

  
});
