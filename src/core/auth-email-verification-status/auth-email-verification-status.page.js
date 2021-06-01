import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { AuthEmailVerificationStatusContainer } from './auth-email-verification-status.container';

export function AuthEmailVerificationStatusPage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <AuthEmailVerificationStatusContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
