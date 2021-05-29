import {
  ContentLayout,
  PageLayout,
  AuthLayout,
} from '../../lib/elements/layout/index';
import { PrimaryBox } from '../../lib/elements/box';
import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <PrimaryBox>
          <AuthLayout>
            <SignupContainer />
          </AuthLayout>
        </PrimaryBox>
      </PageLayout>
    </ContentLayout>
  );
}
