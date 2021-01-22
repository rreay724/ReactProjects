import React from "react";
import { Sidebar, PlayerBody, Footer } from "../index";
import "./player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="playerBody">
        <Sidebar />
        <PlayerBody />
        {/* Sidebar */}
        {/* Body */}
      </div>
      <Footer />
      {/* Footer */}
    </div>
  );
}

export default Player;
