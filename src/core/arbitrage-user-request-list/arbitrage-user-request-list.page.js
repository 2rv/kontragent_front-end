import { ArbitrageUserRequestListContainer } from './arbitrage-user-request-list.container';
import { DashboardLayout } from '../../lib/common/dashboard';
import { IndentLayout } from '../../lib/elements/layout';
export function ArbitrageRequestListPage() {
  return (
    <DashboardLayout>
      <IndentLayout>
        <ArbitrageUserRequestListContainer />
      </IndentLayout>
    </DashboardLayout>
  );
}
