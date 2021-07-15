import { SidebarContainer } from '../../../core/sidebar';
import { HeaderContainer } from '../../../core/header';
import { FooterContainer } from '../../../core/footer';
import { DashboardLayoutPropsType } from './type.dashboard';
import styled from 'styled-components';
import { spacing, THEME_COLOR } from 'src/lib/theme';

export function DashboardLayout(props: DashboardLayoutPropsType) {
  const { children } = props;
  return (
    <Container>
      <SidebarContainer />
      <Content>
        <Header>
          <HeaderContainer />
        </Header>
        <MainContent>{children}</MainContent>
        <Footer>
          <FooterContainer />
        </Footer>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 350px auto;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 800px;
  height: 100%;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
const Header = styled.div`
  width: 100%;
  height: 95px;
`;
const Footer = styled.div`
  width: 100%;
`;
const MainContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  padding: ${spacing(8)};
`;
