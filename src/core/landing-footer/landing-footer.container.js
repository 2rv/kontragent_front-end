import useMediaQuery from '@mui/material/useMediaQuery';

import { LandingFooterDesktopComponent } from './landing-footer-desktop.component';

export function LandingFooterContainer() {
  const desktopBreakpoint = useMediaQuery(theme => theme.breakpoints.up('lg'));

  return (
    Boolean(desktopBreakpoint) && <LandingFooterDesktopComponent />
  );
}
