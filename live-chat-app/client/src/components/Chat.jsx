import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import "../styles/chat.scss";

import Message from "./Message";

let socket;

function Chat() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    setName(name);
    setRoom(room);
    console.log("NAME:", name, "ROOM:", room);

    socket = io(ENDPOINT);
    console.log("SOCKET:", socket);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  function sendMessage(event) {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  }

  console.log("messages", message, messages);

  return (
    <div className="container">
      <div className="leftside">
        <a href="/">
          {" "}
          <h1>spacechat</h1>
        </a>
        <h2>Online</h2>
        <ul className="onlineUsers">
          <li>{name}</li>
        </ul>
        <button>
          <a href="/">Leave</a>
        </button>
      </div>
      <div className="rightside">
        <div className="chatdisplay">
          {/* <div className="messages">
            <h3 className="messageLeft">Text</h3>
            <h3 className="messageRight">Text</h3>
          </div> */}
          <ScrollToBottom>
            {messages.map((message, i) => (
              <div key={i}>
                {" "}
                <Message message={message} name={name} />{" "}
              </div>
            ))}
          </ScrollToBottom>
        </div>

        <div className="titleBar">
          <h2>{room}</h2>{" "}
        </div>
        {/* <div className="messages"></div> */}
        <div className="chatBar">
          <form className="chatInput">
            <input
              className="input"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) =>
                event.key === "Enter" ? sendMessage(event) : null
              }
              type="text"
            />
            <button onClick={(event) => sendMessage(event)}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
