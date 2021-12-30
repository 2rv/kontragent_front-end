import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

import { LandingLayout } from '../../lib/common/landing';
import { LandingAdvantagesPartTwoDesktopComponent } from './landing-advantages-part-two-desktop.component';
import { LandingAdvantagesPartTwoMobileComponent } from './landing-advantages-part-two-mobile.component';

export function LandingAdvantagesPartTwoContainer() {
  const desktopBreakpoint = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const mobileBreakpoint = useMediaQuery(theme => theme.breakpoints.between('xs', 'lg'));

  return (
    <Layout>
      {Boolean(desktopBreakpoint) && <LandingAdvantagesPartTwoDesktopComponent />}
      {Boolean(mobileBreakpoint) && <LandingAdvantagesPartTwoMobileComponent />}
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
  padding: 32px 0;
`;
