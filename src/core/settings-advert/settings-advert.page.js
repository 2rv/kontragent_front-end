import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { PrimaryBox } from '../../lib/elements/box';
import { SettingsAdvertContainer } from './settings-advert.container';

export function SettingsAdvertPage() {
  return (
    <PageLayout align="CENTER">
      <ContentLayout type="SMALL">
        <PrimaryBox>
          <IndentLayout>
            <SettingsAdvertContainer />
          </IndentLayout>
        </PrimaryBox>
      </ContentLayout>
    </PageLayout>
  );
}
