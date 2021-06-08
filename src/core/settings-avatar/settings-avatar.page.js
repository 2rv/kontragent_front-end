import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { PrimaryBox } from '../../lib/elements/box';
import { SettingsAvatarContainer } from './settings-avatar.container';

export function SettingsAvatarPage() {
  return (
    <PageLayout align="CENTER">
      <ContentLayout type="SMALL">
        <PrimaryBox>
          <IndentLayout>
            <SettingsAvatarContainer />
          </IndentLayout>
        </PrimaryBox>
      </ContentLayout>
    </PageLayout>
  );
}
