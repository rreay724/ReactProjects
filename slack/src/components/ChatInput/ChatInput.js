import React, { useState } from "react";
import { ChatInputContainer } from "./chatInput.styled";
import { Button } from "@material-ui/core";
import { db } from "../../firebase";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  console.log(channelId);

  const sendMessage = (e) => {
    e.preventDefault(); // Prevents refresh
    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Bobby Reay",
      userImage:
        "https://media-exp1.licdn.com/dms/image/C5603AQFg9OU6-c1oIw/profile-displayphoto-shrink_800_800/0/1604078453743?e=1622073600&v=beta&t=yjo7-B5uo6Rj5POVciha2C88oPFsoktBL2hhkghFIcE",
    });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
