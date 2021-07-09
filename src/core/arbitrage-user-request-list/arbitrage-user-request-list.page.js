import { ArbitrageUserRequestListContainer } from './arbitrage-user-request-list.container';
import { DashboardLayout } from '../../lib/common/dashboard';

export function ArbitrageRequestListPage() {
  return (
    <DashboardLayout>
      <ArbitrageUserRequestListContainer />
    </DashboardLayout>
  );
}
