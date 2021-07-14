import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';

import { NavMenuContainer } from './frame/nav-menu';
import { LogotypeContainer } from './frame/logotype';
import { AccountInfoContainer } from './frame/account-info';
import { SidebarAdvertContainer } from './frame/sidebar-advert';
import { PrimaryDivider } from '../../lib/elements/divider';

import styled from 'styled-components';
import { spacing, THEME_COLOR } from '../../lib/theme';

export function SidebarComponent() {
  return (
    <Container>
      <LogotypeContainer />

      <Content>
        <PrimaryDivider />
        <AccountInfoContainer />
        <PrimaryDivider />
        <NavMenuContainer />
      </Content>
      <AdvertCase>
        <SidebarAdvertContainer />
      </AdvertCase>
    </Container>
  );
}
const AdvertCase = styled.div`
  height: 286px;
  width: 286px;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${THEME_COLOR.COLOR.BASE};
  padding: ${spacing(8)};
  gap: ${spacing(8)};
`;
const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
`;
