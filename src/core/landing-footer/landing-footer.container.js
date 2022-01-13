import styled from 'styled-components';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import { LandingLayout } from '../../lib/common/landing';
import { LandingFooterDesktopComponent } from './landing-footer-desktop.component';
import { LandingFooterMobileComponent } from './landing-footer-mobile.component';

export function LandingFooterContainer() {
  const desktopBreakpoint = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const mobileBreakpoint = useMediaQuery(theme => theme.breakpoints.between('xs', 'sm'));

  return (
    <Box>
      <Layout>
        {Boolean(desktopBreakpoint) && <LandingFooterDesktopComponent />}
        {Boolean(mobileBreakpoint) && <LandingFooterMobileComponent />}
      </Layout>
    </Box>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
`;
