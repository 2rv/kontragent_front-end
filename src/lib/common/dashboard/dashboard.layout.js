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
        <ContentLayout>
          <IndentLayout>{props.children}</IndentLayout>
        </ContentLayout>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 350px 1fr;
`;
const Content = styled.div`
  display: grid;
  overflow: auto;
  grid-template-rows: 95px auto;
  height: 100%;
`;
const ContentLayout = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  position: relative;
`;
