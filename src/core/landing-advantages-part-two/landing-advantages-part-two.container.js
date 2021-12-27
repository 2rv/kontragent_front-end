import styled from 'styled-components';

import { LandingLayout } from '../../lib/common/landing';
import { LandingAdvantagesPartTwoDesktopComponent } from './landing-advantages-part-two-desktop.component';
import { LandingAdvantagesPartTwoMobileComponent } from './landing-advantages-part-two-mobile.component';

export function LandingAdvantagesPartTwoContainer() {
  return (
    <Layout>
      <LandingAdvantagesPartTwoDesktopComponent />
      <LandingAdvantagesPartTwoMobileComponent />
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
  padding: 32px 0;
`;
