import styled from 'styled-components';
import { LandingLayout } from '../../lib/common/landing';
import { LandingGetNotificationDesktopComponent } from './landing-get-notification-desktop.component';

export function LandingGetNotificationContainer() {
  return (
    <Layout>
      <PolygonSvg src="/static/img/landing/polygon-white-background.svg" />
      <LandingGetNotificationDesktopComponent />
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #f3f3f3;
  position: relative;
`;
const PolygonSvg = styled.img`
  position: absolute;
  top: 50%;
  left: 3%;
  @media (max-width: 1366px) {
    display: none;
  }
`;
