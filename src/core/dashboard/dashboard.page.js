import styled from 'styled-components';
import { DashboardLayout } from '../../lib/common/dashboard';
import { DashboardContainer } from './dashboard.container';

export function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardContainer />
    </DashboardLayout>
  );
}
