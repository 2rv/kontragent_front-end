import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { LoginContainer } from './login.container';

export function LoginPage() {
  return (
    <PageLayout align="center">
      <ContentLayout type="SMALL">
        <IndentLayout>
          <LoginContainer />
        </IndentLayout>
      </ContentLayout>
    </PageLayout>
  );
}
