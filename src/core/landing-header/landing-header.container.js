import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { HOME_ROUTE_PATH } from '../landing';
import { LandingHeaderDesktopComponent } from './landing-header-desktop.component';
import { LandingHeaderMobileComponent } from './landing-header.mobile.component';

export function LandingHeaderContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  const desktopBreakpoint = useMediaQuery(theme => theme.breakpoints.up('md'));
  const mobileBreakpoint = useMediaQuery(theme => theme.breakpoints.between('xs', 'md'));

  const headerLinks = [
    {
      path: HOME_ROUTE_PATH,
      name: 'LANDING.HEADER.HOME',
    },
    {
      path: '',
      name: 'LANDING.HEADER.ABOUT',
    },
    {
      path: '',
      name: 'LANDING.HEADER.ADVANTAGES',
    },
    {
      path: '',
      name: 'LANDING.HEADER.PRINCIPLES',
    },
  ];

  return (
    <>
      {Boolean(desktopBreakpoint) && <LandingHeaderDesktopComponent activePath={activePath} headerLinks={headerLinks} />}
      {Boolean(mobileBreakpoint) && <LandingHeaderMobileComponent activePath={activePath} headerLinks={headerLinks} />}
    </>
  );
}
