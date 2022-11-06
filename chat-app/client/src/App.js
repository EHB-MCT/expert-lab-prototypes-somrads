import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./App.css";

function App() {
  const [socketId, setSocketId] = useState("");
  const [message, setMessage] = useState("");
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState("");
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [room, setRoom] = useState("");
  const [chat, setChat] = useState([]);

  const socket = io('http://localhost:5000');

  useEffect(()=> {
    socket.on('me',id=>(
      setSocketId(id)
    ));

    socket.on("disconnect",()=> {
      socket.disconnect();
    })

    socket.on("getAllUsers",users=>{
      setUsers(users);
    })
    //Real time
    
  },[chat, rooms]);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
