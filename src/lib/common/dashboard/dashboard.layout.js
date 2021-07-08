import { useEffect, useState } from 'react';

import { SidebarContainer } from '../../../core/sidebar';
import { HeaderContainer } from '../../../core/header';

import { IndentLayout } from '../../elements/layout';

import styled from 'styled-components';
import { THEME_COLOR } from 'src/lib/theme';

import { FooterContainer } from '../../../core/footer';
export function DashboardLayout(props) {
  const [height, setHeight] = useState(1000);
  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  return (
    <Container height={height}>
      <SidebarContainer />
      <Content>
        <HeaderContainer />
        <MainContent>{props.children}</MainContent>
        <FooterContainer />
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => `${props.height}px`};
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
