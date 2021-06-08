import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { PrimaryBox } from '../../lib/elements/box';
import { SettingsNotificationContainer } from './settings-notification.container';

export function SettingsNotificationPage() {
  return (
    <PageLayout align="CENTER">
      <PrimaryBox>
        <IndentLayout>
          <ContentLayout type="SMALL">
            <SettingsNotificationContainer />
          </ContentLayout>
        </IndentLayout>
      </PrimaryBox>
    </PageLayout>
  );
}
