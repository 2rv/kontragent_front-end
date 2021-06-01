import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { AuthPhoneVerificationInfoContainer } from './auth-phone-vefirication-info.container';

export function AuthPhoneVerificationInfoPage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <AuthPhoneVerificationInfoContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
