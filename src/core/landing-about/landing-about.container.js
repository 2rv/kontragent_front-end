import styled from 'styled-components';
import { LandingAboutDesktopComponent } from './landing-about-desktop.component';
import { LandingLayout } from '../../lib/common/landing';
export function LandingAboutContainer() {
  return (
    <Layout id="about">
      <LandingAboutDesktopComponent />
    </Layout>
  );
}
const Layout = styled(LandingLayout)`
  background-color: #f3f3f3;
  @media (min-width: 1000px) {
    background-image: url('/static/img/landing/landing-about/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;
