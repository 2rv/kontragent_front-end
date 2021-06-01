import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { LoginContainer } from './login.container';

export function LoginPage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <LoginContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
