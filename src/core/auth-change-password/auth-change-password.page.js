import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { AuthChangePasswordContainer } from './auth-change-password.container';

export function AuthChangePasswordPage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <AuthChangePasswordContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
