import React from "react";
import "./sidebar.css";
import { SidebarOption } from "../index";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useDataLayerValue } from "../../contexts/DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebarLogo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
      <SidebarOption Icon={SearchOutlinedIcon} title="Your Library" />
      <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Search" />
      <br />
      <strong className="sidebarTitle">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
