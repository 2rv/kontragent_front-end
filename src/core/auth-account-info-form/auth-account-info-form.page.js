import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { AuthAccountInfoForm } from './auth-account-info-form.container';

export function AuthAccountInfoPage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <ContentLayout type="SMALL">
          <AuthAccountInfoForm />
        </ContentLayout>
      </IndentLayout>
    </PageLayout>
  );
}
