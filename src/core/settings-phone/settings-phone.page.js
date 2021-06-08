import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { PrimaryBox } from '../../lib/elements/box';
import { SettingsPhoneContainer } from './settings-phone.container';

export function SettingsPhonePage() {
  return (
    <PageLayout align="CENTER">
      <PrimaryBox>
        <IndentLayout>
          <ContentLayout type="SMALL">
            <SettingsPhoneContainer />
          </ContentLayout>
        </IndentLayout>
      </PrimaryBox>
    </PageLayout>
  );
}
