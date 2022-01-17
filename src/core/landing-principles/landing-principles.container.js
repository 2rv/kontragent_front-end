import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

import { LandingLayout } from '../../lib/common/landing';
import { LandingPrinciplesMobileComponent } from './landing-principles-mobile.component';
import { LandingPrinciplesDesktopComponent } from './landing-principles-desktop.component';

export function LandingPrinciplesContainer() {
  const desktopBreakpoint = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const mobileBreakpoint = useMediaQuery(theme => theme.breakpoints.between('xs', 'lg'));

  return (
    <Layout id="principles">
      {Boolean(desktopBreakpoint) && <LandingPrinciplesDesktopComponent />}
      {Boolean(mobileBreakpoint) && <LandingPrinciplesMobileComponent />}
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
  position: relative;
`;
