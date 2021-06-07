import { NavMenuComponent } from './nav-menu.component';
import { SIDEBAR_NAV_MENU_LINK_LIST } from '../../sidebar.constant';

export function NavMenuContainer() {
  return (
    <NavMenuComponent
      activeLinkIndex={0}
      navMenuLinkList={SIDEBAR_NAV_MENU_LINK_LIST}
    />
  );
}
