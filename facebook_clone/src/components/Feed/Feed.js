import React from "react";
import "./feed.css";
import photoURL from "../../images/me-mountain.jpeg";
import { StoryReel, MessageSender, PostMessage } from "../index";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <PostMessage
        profilePic={photoURL}
        message="Balls!"
        username="Booby"
        timestamp="This is a time stamp"
        image="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
      />
      <PostMessage
        profilePic={photoURL}
        message="Hyeeeeeeeeh!"
        username="Booby"
        timestamp="This is a time stamp"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
      />
    </div>
  );
}

export default Feed;
