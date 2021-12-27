import styled from 'styled-components';

import { LandingAdvantagesDesktopComponent } from './landing-advantages-desktop.component';
import { LandingLayout } from '../../lib/common/landing';
import { LandingAdvantagesMobileComponent } from './landing-advantages-mobile.component';

export function LandingAdvantagesContainer() {
  return (
    <Layout>
      <LandingAdvantagesDesktopComponent />
      <LandingAdvantagesMobileComponent />
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
  padding: 32px 0;
`;
