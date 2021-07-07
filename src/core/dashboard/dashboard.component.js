import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { AdvertContainer } from '../advert';
import { NewsAndBlogComponent, ControlBlockComponent } from './frame';
import { IndentLayout } from '../../lib/elements/layout';
export function DashboardComponent() {
  return (
    <Container>
      <Background />
      <Content>
        <AdvertContainer type="BAR" />
        <NewsAndBlogComponent />
        <ControlBlockComponent />
      </Content>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
`;
const Content = styled(IndentLayout)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${spacing(8)};
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 830px;
  background-color: ${THEME_COLOR.COLOR.ACCENT};
`;
