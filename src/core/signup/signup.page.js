import {
  ContentLayout,
  PageLayout,
  AuthLayout,
} from '../../lib/elements/layout/index';
import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <AuthLayout>
          <SignupContainer />
        </AuthLayout>
      </PageLayout>
    </ContentLayout>
  );
}
