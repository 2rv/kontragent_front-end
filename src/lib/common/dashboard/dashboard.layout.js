import React from 'react';

import { SidebarContainer } from '../../../core/sidebar';
import { HeaderContainer } from '../../../core/header';

import { IndentLayout } from '../../elements/layout';

import styled from 'styled-components';
import { THEME_COLOR } from 'src/lib/theme';

export function DashboardLayout(props) {
  return (
    <Container>
      <SidebarContainer />
      <Content>
        <HeaderContainer />
        <MainContent>
          <IndentLayout>{props.children}</IndentLayout>
        </MainContent>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 350px);
  min-width: 500px;
  height: ${window.innerHeight}px;
`;
const MainContent = styled.div`
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
`;
