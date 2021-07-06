import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { AdvertContainer } from '../advert';
import { NewsAndBlogComponent, ControlBlockComponent } from './frame';
export function DashboardComponent() {
  return (
    <>
      <Background />
      <Container>
        <AdvertContainer type="BAR" />
        <NewsAndBlogComponent />
        <ControlBlockComponent />
      </Container>
    </>
  );
}
const Container = styled.div`
  position: relative;
  display: grid;
  gap: ${spacing(8)};
`;
const Background = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 886px;
  width: 100%;
  background-color: ${THEME_COLOR.COLOR.ACCENT};
`;
