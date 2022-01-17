import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

import { LandingHeroDesktopComponent } from './landing-hero-desktop.component';
import { LandingHeroMobileComponent } from './landing-hero-mobile.component';
import { LandingLayout } from '../../lib/common/landing';

export function LandingHeroContainer() {
  const desktopBreakpoint = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const mobileBreakpoint = useMediaQuery(theme => theme.breakpoints.between('xs', 'lg'));

  return (
    <Layout>
      {Boolean(desktopBreakpoint) && <LandingHeroDesktopComponent />}
      {Boolean(mobileBreakpoint) && <LandingHeroMobileComponent />}
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
  max-height: 120vh;
  @media (min-width: 0px) and (max-width: 600px) {
    background-image: url("/static/img/landing/landing-hero/background-mobile.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  @media (min-width: 1000px) and (max-width: 1280px) {
    background-image: url("/static/img/landing/landing-hero/background-1280.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    background-image: url("/static/img/landing/landing-hero/background-1366.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  @media (min-width: 1366px) and (max-width: 1600px) {
    background-image: url("/static/img/landing/landing-hero/background-1600.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  @media (min-width: 1600px) {
    background-image: url("/static/img/landing/landing-hero/background-max-display.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
`;
