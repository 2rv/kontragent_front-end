import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { SupportCreateRequestContainer } from './support-create-request.container';

export function SupportCreateRequestPage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <SupportCreateRequestContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
