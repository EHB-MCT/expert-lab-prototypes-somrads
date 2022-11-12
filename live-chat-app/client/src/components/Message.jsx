import React from "react";
import "../styles/message.scss";

function Message({ message: { text, user }, name }) {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="messageBox backgroundBlue">
      <p className="sentText pr-10">{trimmedName}</p>
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
      <p className="sentText pl-10">{user}</p>
        <p className="messageText colorDark">{text}</p>
      </div>
    </div>
  );
}

export default Message;
