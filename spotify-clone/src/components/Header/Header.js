import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import avatarImage from "../../images/me-mountain.jpeg";
import { useDataLayerValue } from "../../contexts/DataLayer";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="headerLeft">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs or Playlists"
          type="text"
        />
      </div>
      <div className="headerRight">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
