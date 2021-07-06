import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
export function DashboardComponent() {
  return (
    <Container>
      <Background />
    </Container>
  );
}
const Container = styled.div``;
const Background = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 886px;
  width: 100%;
  background-color: ${THEME_COLOR.COLOR.ACCENT};
`;
