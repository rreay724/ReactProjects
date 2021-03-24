import React from "react";
import { MessageContainer, MessageInfo } from "./message.styled";

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}{" "}
          <span>
            {new Date(timestamp?.toDate()).toLocaleString().replace(/,/, "")}
          </span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;
