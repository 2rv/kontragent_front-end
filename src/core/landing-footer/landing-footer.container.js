import styled from 'styled-components';
import { LandingLayout } from '../../lib/common/landing';
import { LandingFooterComponent } from './landing-footer.component';

export function LandingFooterContainer() {
  return (
    <Layout>
      <LandingFooterComponent />
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #f3f3f3;
  & > div {
    padding: 50px 32px;
    @media (min-width: 0px) and (max-width: 599px) {
      padding: 50px 24px;
    }
  }
`;
