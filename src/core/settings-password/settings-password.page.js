import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { PrimaryBox } from '../../lib/elements/box';
import { SettingsPasswordContainer } from './settings-password.container';

export function SettingsPasswordPage() {
  return (
    <PageLayout align="CENTER">
      <PrimaryBox>
        <IndentLayout>
          <ContentLayout type="SMALL">
            <SettingsPasswordContainer />
          </ContentLayout>
        </IndentLayout>
      </PrimaryBox>
    </PageLayout>
  );
}
