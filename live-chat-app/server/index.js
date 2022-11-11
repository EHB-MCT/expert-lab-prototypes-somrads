const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = 5000 || process.env.PORT;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User is connected");

  socket.on("join", ({ name, room }) => {
    console.log("We have user:", name, ", In the spaceroom:", room);
  });

  socket.on("disconnect", () => {
    console.log("User had left");
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
