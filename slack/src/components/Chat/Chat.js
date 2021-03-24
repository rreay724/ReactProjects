import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import React from "react";
import {
  ChatContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  ChatMessages,
} from "./chat.styled";
import { ChatInput, Message } from "../index";
import { selectRoomId } from "../../features/appSlice";
import { useSelector } from "react-redux";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>{roomDetails?.data().name}</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlinedIcon />
              Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages>
          {roomMessages?.docs.map((doc) => {
            const { message, timestamp, user, userImage } = doc.data();
            return (
              <Message
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
              />
            );
          })}
        </ChatMessages>
        <ChatInput
          channelId={roomId}
          channelName={roomDetails?.data().name}
        ></ChatInput>
      </>
    </ChatContainer>
  );
}

export default Chat;
