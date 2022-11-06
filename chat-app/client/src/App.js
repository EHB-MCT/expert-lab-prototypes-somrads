import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./App.css";
const socket = io("http://localhost:5000");

function App() {
  const [socketId, setSocketId] = useState("");
  const [message, setMessage] = useState("");
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [room, setRoom] = useState("");
  const [chat, setChat] = useState([]);

  const chatContainer = useRef(null);

  useEffect(() => {
    socket.on("me", (id) => {
      setSocketId(id);
    });

    socket.on("disconnect", () => {
      socket.disconnect();
    });

    socket.on("getAllUsers", (users) => {
      setUsers(users);
    });

    //Real time
    socket.on("updateUsers", (users) => {
      setUsers(users);
    });

    socket.on("getAllRooms", (rooms) => {
      setRooms(rooms);
    });

    //Real time
    socket.on("updateRooms", (rooms) => {
      setRooms(rooms);
    });

    //Rooms
    socket.on("chat", (payLoad) => {
      setChat(payLoad.chat);
    });

    //auto scroll
    if (joinedRoom === true) {
      chatContainer.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [chat, rooms]);

  const sendMessage = () => {
    const payload = { message, room, socketId };
    socket.emit("message", payload);
    setMessage("");
    socket.on("chat", (payload2) => {
      setChat(payload2.chat);
    });
    chatContainer.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const createRoom = () => {
    socket.emit("createRoom");
    socket.on("getRoom", (room) => {
      setRooms([...rooms, room]);
    });
  };

  const joinRoom = (room) => {
    socket.emit("joinRoom", room);
    setRoom(room.id);
    setJoinedRoom(true);
    setChat(room.chat);
  };

  return (
    <>
      <h1 className="mainHeading">spacechat</h1>
      <h1 className="mySocket">Me:{socketId}</h1>
      <h3 className="roomJoined">
        {joinedRoom === true
          ? `Space Room ${room}`
          : "You are not joined in any space room"}
      </h3>

      {!joinedRoom && (
        <div className="container">
          <div className="users-container">
            <h2 className="usersHeading">Online Users:</h2>
            <ul className="users">
              {users.map((user) => {
                return (
                  <li className="user" key={user}>
                    {user && user === socketId ? `admin` : user}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="rooms-container">
            <h2 className="roomsHeading">Available Space Rooms:</h2>

            {rooms.length === 0 ? (
              <h3 className="noRooms">No Rooms! Create a space room !</h3>
            ) : (
              <ul className="rooms">
                {rooms.map((room) => {
                  return (
                    <li key={room.id} onClick={() => joinRoom(room)}>
                      {room.id}
                    </li>
                  );
                })}
              </ul>
            )}
            <div className="btn-container">
              <button className="btn" onClick={() => createRoom()}>
                Create Space Room
              </button>
            </div>
          </div>
        </div>
      )}
      {joinedRoom && (
        <>
          <div className="chat-container">
            <ul className="chat-list" id="chat-list" ref={chatContainer}>
              {chat.map((chat, index) => {
                <li
                  key={index}
                  className={chat.writer === socketId ? "chat-me" : "chat-user"}
                >
                  {chat.writer === socketId
                    ? `${chat.message}: Me`
                    : `User(${chat.writer.slice(0, 5)}):`}
                </li>;
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default App;
