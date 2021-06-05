import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { PrimaryBox } from '../../lib/elements/box';
import { Settings2FAContainer } from './settings-2fa.container';

export function Setting2FAPage() {
  return (
    <PageLayout align="CENTER">
      <PrimaryBox>
        <IndentLayout>
          <ContentLayout type="SMALL">
            <Settings2FAContainer />
          </ContentLayout>
        </IndentLayout>
      </PrimaryBox>
    </PageLayout>
  );
}
