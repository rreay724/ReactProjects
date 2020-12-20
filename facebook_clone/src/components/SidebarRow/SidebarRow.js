import React from "react";
import "./sidebarRow.css";
import { Avatar } from "@material-ui/core";

// Icon is a component passed as a prop
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
