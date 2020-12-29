import React, { useState, useEffect } from "react";
import "./feed.css";
import photoURL from "../../images/me-mountain.jpeg";
import { StoryReel, MessageSender, PostMessage } from "../index";
import db from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  // empty bracket in useEffect makes the code only run once
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <PostMessage
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
