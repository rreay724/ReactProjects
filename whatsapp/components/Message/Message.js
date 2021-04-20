import {
  Container,
  MessageElement,
  Sender,
  Receiver,
  Timestamp,
} from "./message.styled";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import moment from "moment";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;

  return (
    <Container>
      <TypeOfMessage>
        {message.message}
        <Timestamp>
          {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
        </Timestamp>
      </TypeOfMessage>
    </Container>
  );
}

export default Message;
