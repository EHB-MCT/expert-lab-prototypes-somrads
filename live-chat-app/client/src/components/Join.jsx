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
            Talk with your fellow space fanatics about the wonders of space.{" "}
            <br />
            Enter your username and then enter your room name to join your <br />
            friends or create your own room by also entering a room name.
          </h2>
        </div>
      </div>
      <div className="input-area-container">
        <div className="input-container">
          <div className="username">
            <h3>Enter your username</h3>
            <input
              type="text"
              className="joinInput"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>

          <div className="room">
            <h3>Join a space room</h3>
            <input
              type="text"
              className="joinInput mt-20"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="button">
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?&name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            GO!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
