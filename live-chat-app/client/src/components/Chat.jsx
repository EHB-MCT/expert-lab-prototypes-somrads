import React from "react";
import { Link } from "react-router-dom";
import "../styles/chat.scss";

function Chat() {
  return (
    <div className="container">
      <div className="leftside">
        <h1>spacechat</h1>
        <h2>Online</h2>
        <ul className="onlineUsers">
          <li>Tom</li>
          <li>John</li>
          <li>Jacob</li>
          <li>Jesse</li>
        </ul>
        <button>Leave</button>
      </div>
      <div className="rightside">
        <div className="chatdisplay">
          <div className="messages">
            <h3 className="messageLeft">Text</h3>
            <h3 className="messageRight">Text</h3>

          </div>
        </div>
        <div className="titleBar">
          <h2>Apollo 13</h2>{" "}
        </div>
        <div className="messages"></div>
        <div className="chatBar">
          <div className="chatInput">
            <input type="text" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
