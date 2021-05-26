import {
  ContentLayout,
  PageLayout,
  AuthLayout,
} from '../../lib/elements/layout/index';
import { PrimaryBox } from '../../lib/elements/box';
import { LoginContainer } from './login.container';

export function LoginPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <PrimaryBox>
          <AuthLayout>
            <LoginContainer />
          </AuthLayout>
        </PrimaryBox>
      </PageLayout>
    </ContentLayout>
  );
}
