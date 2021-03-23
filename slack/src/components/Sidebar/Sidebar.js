import React from "react";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./sidebar.styled";
import FiberManualRecrodIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>YO MAMAS HQ</h2>
          <h3>
            <FiberManualRecrodIcon />
            Bobby Reay
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default Sidebar;
