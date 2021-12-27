import styled from 'styled-components';

import { LandingLayout } from '../../lib/common/landing';
import { LandingPrinciplesMobileComponent } from './landing-principles-mobile.component';
import { LandingPrinciplesDesktopComponent } from './landing-principles-desktop.component';

export function LandingPrinciplesContainer() {
  return (
    <Layout>
      <LandingPrinciplesDesktopComponent />
      <LandingPrinciplesMobileComponent />
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
  position: relative;
`;
