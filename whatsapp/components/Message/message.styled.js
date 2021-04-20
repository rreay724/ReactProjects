import styled from "styled-components";

export const Container = styled.div``;

export const MessageElement = styled.p`
  width: fit-content;
  min-height: 10px;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 80px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;

export const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;

export const Receiver = styled(MessageElement)`
  margin-left: left;
  background-color: whitesmoke;
`;

export const Timestamp = styled.span`
  color: gray;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;
