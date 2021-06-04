import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';

import { NavMenuContainer } from './frame/nav-menu';
import { LogotypeContainer } from './frame/logotype';
import { AccountInfoContainer } from './frame/account-info';
import { SidebarAdvertContainer } from './frame/sidebar-advert';
import { PrimaryDivider } from '../../lib/elements/divider';

import styled from 'styled-components';
import { spacing } from '../../lib/theme';

export function SidebarComponent() {
  return (
    <SidebarBox>
      <SideBarIndent>
        <LogotypeContainer />

        <Container>
          <PrimaryDivider />

          <AccountInfoContainer />

          <PrimaryDivider />

          <NavMenuContainer />
        </Container>

        <SidebarAdvertContainer />
      </SideBarIndent>
    </SidebarBox>
  );
}

const SidebarBox = styled(PrimaryBox)`
  min-height: 100vh;
  border-radius: 0;
`;

const SideBarIndent = styled(IndentLayout)`
  padding-right: ${spacing(9)};
`;

const Container = styled.div`
  display: grid;
  gap: ${spacing(6)};
  padding-top: ${spacing(8)};
  padding-bottom: ${spacing(20)};
`;
