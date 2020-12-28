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
        message="Midgard"
        username="Bobby"
        timestamp="This is a time stamp"
        image="https://i.pinimg.com/originals/a4/ef/35/a4ef353a25071c45eac3cc4ae506fc9e.jpg"
      />
      <PostMessage
        profilePic={photoURL}
        message="The climb!"
        username="Bobby"
        timestamp="This is a time stamp"
        image="https://i.redd.it/jmcwrgske0x31.jpg"
      />
    </div>
  );
}

export default Feed;
