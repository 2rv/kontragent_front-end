import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';

import { NavMenuContainer } from './frame/nav-menu';

export function SidebarComponent() {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <NavMenuContainer />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
