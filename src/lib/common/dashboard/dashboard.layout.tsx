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
      <HeaderCase>
        <HeaderContainer />
      </HeaderCase>
      <Content>
        <SidebarCase>
          <SidebarContainer />
        </SidebarCase>
        <ContentCase>
          <MainContent>{!false && children}</MainContent>
          <FooterContainer />
        </ContentCase>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
const HeaderCase = styled.div`
  height: 100px;
  width: 100%;
`;
const Content = styled.div`
  display: grid;
  flex-grow: 1;
  min-height: 0;
  grid-template-columns: 350px auto;
`;
const SidebarCase = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 0;
  width: 350px;
`;
const ContentCase = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: ${spacing(8)};
  position: relative;
  overflow: auto;
`;
