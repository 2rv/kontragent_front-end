import styled from 'styled-components';
import { LandingLayout } from '../../lib/common/landing';
import { LandingReviewDesktopComponent } from './landing-review-desktop.component';

export function LandingReviewContainer() {
  return (
    <Layout>
      <LandingReviewDesktopComponent />
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #3ab8ff;
  @media (min-width: 1000px) {
    background-image: url('/static/img/landing/landing-review/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;
