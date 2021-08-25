import { NavMenuComponent } from './nav-menu.component';
import { useSelector } from 'react-redux';
import { NAVMENU_ITEMS } from '../../sidebar.constant';
import { NAVIGATION_STORE_NAME } from '../../../../lib/common/navigation/navigation.constant';

export function NavMenuContainer(props) {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));
  return (
    <NavMenuComponent activePath={activePath} navmenuItems={NAVMENU_ITEMS} />
  );
}
