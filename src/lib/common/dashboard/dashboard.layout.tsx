import { SidebarContainer } from '../../../core/sidebar';
import { HeaderContainer } from '../../../core/header';
import { FooterContainer } from '../../../core/footer';
import { DashboardLayoutPropsType } from './type.dashboard';
import styled from 'styled-components';
import { spacing, THEME_COLOR } from 'src/lib/theme';

export function DashboardLayout(props: DashboardLayoutPropsType) {
  const { children, displayFooter } = props;
  return (
    <Container>
      <SidebarContainer />
      <Content>
        <HeaderContainer />
        <MainContent>
          <Layout>{children}</Layout>
        </MainContent>
        {displayFooter && (
          <Footer>
            <FooterContainer />
          </Footer>
        )}
      </Content>
    </Container>
  );
}
const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: ${spacing(8)};
`;
const Footer = styled.div`
  align-self: flex-end;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 350px);
  min-width: 500px;
  height: 100%;
`;

const MainContent = styled.div`
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  width: 100%;
  height: 100%;
  position: relative;
`;
