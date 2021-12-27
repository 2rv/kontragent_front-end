import styled from 'styled-components';

import { LandingLayout } from '../../lib/common/landing';
import { LandingProblemsMobileComponent } from './landing-problems-mobile.component';
import { LandingProblemsDesktopComponent } from './landing-problems-desktop.component';

export function LandingProblemsContainer() {
  return (
    <Layout>
      <LandingProblemsDesktopComponent />
      <LandingProblemsMobileComponent />
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
  position: relative;
`;
