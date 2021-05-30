import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <PageLayout align="center">
      <ContentLayout type="SMALL">
        <IndentLayout>
          <SignupContainer />
        </IndentLayout>
      </ContentLayout>
    </PageLayout>
  );
}
