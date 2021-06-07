import { ContentLayout, PageLayout } from '../../lib/elements/layout/index';
import { SidebarContainer } from './sidebar.container';

export function SidebarPage() {
  return (
    <PageLayout align="TOP">
      <ContentLayout type="SMALL">
        <SidebarContainer />
      </ContentLayout>
    </PageLayout>
  );
}
