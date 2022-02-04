import styled from 'styled-components';
import { LandingLayout } from '../../lib/common/landing';
import { LandingStartNowDesktopComponent } from './landing-start-now-desktop.component';

export function LandingStartNowContainer() {
  return (
    <Layout>
      <LandingStartNowDesktopComponent />
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #3ab8ff;
  @media (min-width: 1000px) {
    background-image: url('/static/img/landing/landing-start-now/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;
