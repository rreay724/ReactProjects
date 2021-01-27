import React from "react";
import { Sidebar, Body, Footer } from "../index";
import "./player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="playerBody">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
