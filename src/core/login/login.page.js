import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { LoginContainer } from './login.container';

export function LoginPage() {
  return (
    <PageLayout align="center">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <LoginContainer />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
