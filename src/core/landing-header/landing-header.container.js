import useMediaQuery from '@mui/material/useMediaQuery';

import { HOME_ROUTE_PATH } from '../landing';
import { LandingHeaderDesktopComponent } from './landing-header-desktop.component';
import { LandingHeaderMobileComponent } from './landing-header.mobile.component';

export function LandingHeaderContainer() {
  const desktopBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.up('lg'),
  );
  const mobileBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'lg'),
  );

  const headerLinks = [
    { name: 'LANDING.HEADER.HOME', path: HOME_ROUTE_PATH },
    { name: 'LANDING.HEADER.ABOUT', path: HOME_ROUTE_PATH + '#about' },
    {
      name: 'LANDING.HEADER.ADVANTAGES',
      path: HOME_ROUTE_PATH + '#advantages',
    },
    {
      name: 'LANDING.HEADER.PRINCIPLES',
      path: HOME_ROUTE_PATH + '#principles',
    },
  ];

  return (
    <>
      {Boolean(desktopBreakpoint) && (
        <LandingHeaderDesktopComponent headerLinks={headerLinks} />
      )}
      {Boolean(mobileBreakpoint) && (
        <LandingHeaderMobileComponent headerLinks={headerLinks} />
      )}
    </>
  );
}
