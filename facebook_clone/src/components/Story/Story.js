import React from "react";
import "./story.css";
import { Avatar } from "@material-ui/core";

function Story({ image, profileSrc, title }) {
  return (
    //   this style uses the image specified to set the background
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story_avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
