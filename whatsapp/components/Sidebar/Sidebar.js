import { SidebarContainer, Header, UserAvatar } from "./sidebar.styled";

function Sidebar() {
  return (
    <SidebarContainer>
      <Header>
        <UserAvatar />
      </Header>
    </SidebarContainer>
  );
}

export default Sidebar;
