import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

import { LandingLayout } from '../../lib/common/landing';
import { LandingProblemsMobileComponent } from './landing-problems-mobile.component';
import { LandingProblemsDesktopComponent } from './landing-problems-desktop.component';

export function LandingProblemsContainer() {
  const desktopBreakpoint = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const mobileBreakpoint = useMediaQuery(theme => theme.breakpoints.between('xs', 'lg'));

  return (
    <Layout>
      {Boolean(desktopBreakpoint) && <LandingProblemsDesktopComponent />}
      {Boolean(mobileBreakpoint) && <LandingProblemsMobileComponent />}
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
  position: relative;
`;
