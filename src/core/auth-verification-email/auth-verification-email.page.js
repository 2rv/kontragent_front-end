import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { AuthVerificationEmailContainer } from './auth-verification-email.container';

export function AuthVerificationEmailPage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <AuthVerificationEmailContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
