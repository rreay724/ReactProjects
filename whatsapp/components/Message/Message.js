import { Container } from "./message.styled";

function Message({ user, message }) {
  return (
    <Container>
      <p>{message.message}</p>
    </Container>
  );
}

export default Message;
