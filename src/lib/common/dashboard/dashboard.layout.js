import { SidebarContainer } from '../../../core/sidebar';
import { HeaderContainer } from '../../../core/header';

import styled from 'styled-components';
import { THEME_COLOR } from 'src/lib/theme';

export function DashboardLayout(props) {
  return (
    <Container>
      <SidebarContainer />
      <Content>
        <HeaderContainer />
        <MainContent>{props.children}</MainContent>
      </Content>
    </Container>
  );
}

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
  overflow: auto;
  width: 100%;
  height: 100%;
`;
