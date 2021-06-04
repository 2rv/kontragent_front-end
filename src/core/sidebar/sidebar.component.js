import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';

import { NavMenuContainer } from './frame/nav-menu';
import { LogotypeContainer } from './frame/logotype';
import { AccountInfoContainer } from './frame/account-info';
import { SidebarAdvertContainer } from './frame/sidebar-advert';

import styled from 'styled-components';
import { spacing } from '../../lib/theme';

export function SidebarComponent() {
  return (
    <PrimaryBox>
      <SideBarIndentLayout>
        <SectionLayout>
          <LogotypeContainer />
          <AccountInfoContainer />
          <NavMenuContainer />
          <SidebarAdvertContainer />
        </SectionLayout>
      </SideBarIndentLayout>
    </PrimaryBox>
  );
}

const SideBarIndentLayout = styled(IndentLayout)`
  padding-right: ${spacing(9)};
`;
