import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { AuthAccountVerificationStatusContainer } from './auth-account-verifiction-status.container';

export function AccountVerificationStatusPage() {
  return (
    <PageLayout align="center">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <AuthAccountVerificationStatusContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
