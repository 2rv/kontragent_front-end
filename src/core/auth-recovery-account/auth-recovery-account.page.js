import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { AuthRecoveryAccountContainer } from './auth-recovery-account.container';

export function AuthRecoveryAccountPage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <AuthRecoveryAccountContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
