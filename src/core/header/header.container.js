import { HeaderComponent } from './header.component';

export function HeaderContainer({ toggleSidebar, toggleSibearHandler }) {
  return (
    <HeaderComponent
      toggleSidebar={toggleSidebar}
      toggleSibearHandler={toggleSibearHandler}
    />
  );
}
