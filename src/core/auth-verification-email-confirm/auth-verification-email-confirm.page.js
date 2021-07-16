import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { AuthVerificationEmailConfirmContainer } from './auth-verification-email-confirm.container';

export function AuthVerificationEmailConfirmPage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <AuthVerificationEmailConfirmContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
