import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';

import { NavMenuContainer } from './frame/nav-menu';
import { AccountInfoContainer } from './frame/account-info';
import { SidebarAdvertContainer } from './frame/sidebar-advert';
import { PrimaryDivider } from '../../lib/elements/divider';

import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';

export function SidebarComponent(props) {
  const { toggle } = props;
  return (
    <Menu toggle={toggle}>
      <Content>
        <AccountInfoContainer />
        <PrimaryDivider />
        <NavMenuContainer />
        <SidebarAdvertContainer />
      </Content>
    </Menu>
  );
}
const Menu = styled.div`
  display: flex;
  flex: 1;
  transition: ${THEME_SIZE.TRANSACTION.DEFAULT};
  max-width: ${(p) => (p.toggle ? `350px` : 0)};
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
  overflow: hidden;
  gap: ${spacing(6)};
  padding: 0 ${spacing(2)} ${spacing(8)} ${spacing(8)};
  flex: 1 0;
  height: 100%;
`;
