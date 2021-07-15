import { EntityContainer } from './entity.container';
import { DashboardLayout } from '../../lib/common/dashboard';

export function EntityPage() {
  return (
    <DashboardLayout>
      <EntityContainer />
    </DashboardLayout>
  );
}
