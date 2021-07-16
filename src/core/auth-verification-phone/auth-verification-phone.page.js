import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { AuthVerificationPhoneContainer } from './auth-verification-phone.container';

export function AuthVerificationPhonePage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <AuthVerificationPhoneContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
