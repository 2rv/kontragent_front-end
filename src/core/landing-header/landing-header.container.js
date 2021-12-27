import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { HOME_ROUTE_PATH } from '../landing';
import { LandingHeaderDesktopComponent } from './landing-header-desktop.component';
import { LandingHeaderMobileComponent } from './landing-header.mobile.component';

export function LandingHeaderContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  const headerLinks = [
    {
      path: HOME_ROUTE_PATH,
      name: 'Главная',
    },
    {
      path: '',
      name: 'О проекте',
    },
    {
      path: '',
      name: 'Наши преимущества',
    },
    {
      path: '',
      name: 'Наши принципы',
    },
  ];

  return (
    <>
      <LandingHeaderDesktopComponent activePath={activePath} headerLinks={headerLinks} />
      <LandingHeaderMobileComponent activePath={activePath} headerLinks={headerLinks} />
    </>
  );
}
