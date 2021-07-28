import React from 'react';

import { SidebarContainer } from '../../../core/sidebar';
import { HeaderContainer } from '../../../core/header';
import { FooterContainer } from '../../../core/footer';
import { DashboardLayoutPropsType } from './type.dashboard';
import styled from 'styled-components';
import { spacing, THEME_COLOR } from 'src/lib/theme';

export function DashboardLayout(props: DashboardLayoutPropsType) {
  const { children } = props;
  const [toggleSidebar, setToggleSidebar] = React.useState<boolean>(false);

  const toggleSidebarHandler = (): void => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <Container>
      <HeaderCase>
        <HeaderContainer
          toggleSidebar={toggleSidebar}
          toggleSidebarHandler={toggleSidebarHandler}
        />
      </HeaderCase>
      <Content>
        <SidebarContainer toggle={toggleSidebar} />
        <ContentCase>
          <MainContent>
            <OverflowCase>{children}</OverflowCase>
          </MainContent>
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
  display: flex;
  flex-grow: 1;
  min-height: 0;
`;
const ContentCase = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  position: relative;
  padding: ${spacing(8)};
  padding-right: ${spacing(2)};
`;
const OverflowCase = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: auto;
  padding-right: ${spacing(5)};
`;
