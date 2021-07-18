import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';

import { NavMenuContainer } from './frame/nav-menu';
import { AccountInfoContainer } from './frame/account-info';
import { SidebarAdvertContainer } from './frame/sidebar-advert';
import { PrimaryDivider } from '../../lib/elements/divider';

import styled from 'styled-components';
import { spacing, THEME_COLOR } from '../../lib/theme';

export function SidebarComponent() {
  return (
    <Container>
      <AccountInfoContainer />
      <PrimaryDivider />
      <NavMenuContainer />
      <AdvertCase>
        <SidebarAdvertContainer />
      </AdvertCase>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-grow: 1;
  padding: 0 ${spacing(8)} ${spacing(8)} ${spacing(8)};
  gap: ${spacing(6)};
`;
const AdvertCase = styled.div`
  margin-top: auto;
`;
