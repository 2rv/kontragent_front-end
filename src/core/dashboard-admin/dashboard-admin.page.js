import styled from 'styled-components';
import { DashboardLayout } from '../../lib/common/dashboard';
import { DashboardAdminContainer } from './dashboard-admin.container';

export function DashboardAdminPage() {
  return (
    <DashboardLayout>
      <DashboardAdminContainer />
    </DashboardLayout>
  );
}
