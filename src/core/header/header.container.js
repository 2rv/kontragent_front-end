import { HeaderComponent } from './header.component';

export function HeaderContainer({ toggleSidebar, toggleSidebarHandler }) {
  return (
    <HeaderComponent
      toggleSidebar={toggleSidebar}
      toggleSidebarHandler={toggleSidebarHandler}
    />
  );
}
