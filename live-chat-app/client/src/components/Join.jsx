import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/join.scss";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
      <div className="container">
            <div className="background-img"></div>
            <div className="background-img2"></div>
        <div className="text-container">
          <div className="text">
            <h1>spacechat</h1>
            <h2>
              Talk with your fellow space fanatics about the wonders of space
            </h2>
          </div>
        </div>
        <div className="input-area-container">
          <div className="input-container">
            <div className="username">
              <h3>Enter your username</h3>
              <input type="text" />
            </div>
            <div className="room">
              <h3>Join a space room</h3>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="button">
          <button>Lift Off</button>
        </div>
      </div>
  );
}

export default Join;