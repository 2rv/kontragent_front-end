import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <SignupContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
