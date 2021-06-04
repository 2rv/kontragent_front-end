import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';

import { NavMenuContainer } from './frame/nav-menu';
import { LogotypeContainer } from './frame/logotype';

export function SidebarComponent() {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <LogotypeContainer />
          <NavMenuContainer />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
