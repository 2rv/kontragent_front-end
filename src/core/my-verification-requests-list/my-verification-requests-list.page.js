import { MyVerificationRequestsListContainer } from './my-verification-requests-list.container';
import { DashboardLayout } from '../../lib/common/dashboard';

export function MyVerificationRequestsListPage() {
  return (
    <DashboardLayout displayFooter={true}>
      <MyVerificationRequestsListContainer />
    </DashboardLayout>
  );
}
