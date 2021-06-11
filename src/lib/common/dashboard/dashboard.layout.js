import React from 'react';

import { SidebarContainer } from '../../../core/sidebar';
import { HeaderContainer } from '../../../core/header';

import { IndentLayout } from '../../elements/layout';

import styled from 'styled-components';
import { THEME_COLOR } from 'src/lib/theme';

export function DashboardLayout(props) {
  return (
    <React.Fragment>
      <SidebarLayout>
        <SidebarContainer />
      </SidebarLayout>
      <HeaderLayout>
        <HeaderContainer />
      </HeaderLayout>
      <ContentLayout>
        <IndentLayout>{props.children}</IndentLayout>
      </ContentLayout>
    </React.Fragment>
  );
}

const SidebarLayout = styled.div`
  position: fixed;
  width: 350px;
  z-index: 9999;
`;

const HeaderLayout = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  padding-left: 350px;
  z-index: 9999;
`;

const ContentLayout = styled.div`
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  position: relative;
  padding-top: 95px;
  padding-left: 350px;
  min-height: 100vh;
`;
