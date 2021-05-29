import {
  ContentLayout,
  PageLayout,
  AuthLayout,
} from '../../lib/elements/layout/index';
import { LoginContainer } from './login.container';

export function LoginPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <AuthLayout>
          <LoginContainer />
        </AuthLayout>
      </PageLayout>
    </ContentLayout>
  );
}
