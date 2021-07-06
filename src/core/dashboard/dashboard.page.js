import styled from 'styled-components';
import { DashboardLayout } from '../../lib/common/dashboard';
import { PageLayout } from '../../lib/elements/layout';
export function DashboardPage() {
  return (
    <DashboardLayout>
      <Container></Container>
    </DashboardLayout>
  );
}
const Container = styled.div`
  height: 10000px;
  background-color: plum;
  width: 100%;
`;
