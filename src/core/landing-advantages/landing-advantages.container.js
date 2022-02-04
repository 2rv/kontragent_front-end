import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

import { LandingAdvantagesDesktopComponent } from './landing-advantages-desktop.component';
import { LandingLayout } from '../../lib/common/landing';
import { LandingAdvantagesMobileComponent } from './landing-advantages-mobile.component';

export function LandingAdvantagesContainer() {
  const desktopBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.up('md'),
  );
  const mobileBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'md'),
  );
  1;

  return (
    <Layout id="advantages">
      {Boolean(desktopBreakpoint) && <LandingAdvantagesDesktopComponent />}
      {Boolean(mobileBreakpoint) && <LandingAdvantagesMobileComponent />}
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
`;
